import jwtDecode from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';
import LoadingComponent from '../components/Loading';
import { toast } from 'react-toastify'
import api from '../services/Api';

interface TokenData {
    sub: number,
    username: string,
    roles: string[],
    iat: number,
    exp: number,
};

interface UserData {
    id: number,
    name: string,
    pis: number,
    userId: number,
    onPremiseId: string,
};

interface AuthContextData {
    authenticated: boolean;
    token: string | null;
    tokenData: TokenData;
    userData: UserData;
    tenant: string;
    login(data: LoginFormData): Promise<void>;
    logout(): void;
    getEmployee(): void;
}

interface LoginFormData {
    username: string;
    password: string;
}

interface PuncheData {
    id: number;
    date: Date;
    time: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: any) {

    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState<UserData>({} as UserData);
    const [tokenData, setTokenData] = useState<TokenData>({} as TokenData);
    const [tenant, setTenant] = useState('');

    useEffect(() => {
        async function loadStorageData() {
            const storageToken = localStorage.getItem('sanconAuthToken');
            const storageUser = localStorage.getItem('sanconClockUser');
            const storageTenant = localStorage.getItem('sanconAuthTenant');

            await new Promise(resolve => setTimeout(resolve, 2500));

            if (storageToken && storageUser) {
                setToken(storageToken);
                setUserData(JSON.parse(storageUser));
                setTokenData(jwtDecode(storageToken));
                setTenant(String(storageTenant));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorageData();
    }, []);

    // function validateTenant(tenant: any) {
    //     let re = /(?<=@)[^.]+(?=)/g;
    //     return re.test(tenant);
    // }

    // function getTenant(tenant: any) {
    //     let domain = tenant.replace(/.*@/, "");
    //     setTenant(domain);
    //     return domain;
    // }

    async function login(data: LoginFormData) {
        setLoading(true);
        let tenant = data.username.split('@')[1].replaceAll('.', '_');
        data.username = data.username.split('@')[0];
        try {
            const response = await api.authApi.post(tenant + '/api/auth/login', data);

            if (response.status === 201) {
                toast.success("Usuário Logado!");
                setTokenData(jwtDecode(response.data.token));
                setToken(response.data.token);
                setTenant(tenant);
                localStorage.setItem('sanconAuthToken', response.data.token);
                localStorage.setItem('sanconAuthTenant', tenant);
            }
        } catch (e) {
            await logout();
        }

        setLoading(false);
    }

    async function getEmployee() {

        if (token && localStorage.getItem('sanconAuthToken')) {
            let dataToken: TokenData = jwtDecode(token);

            try {
                const response = await api.clockApi.get(tenant + '/api/employees/userId/' + dataToken?.sub);
                if (response.status === 200) {
                    localStorage.setItem('sanconClockUser', JSON.stringify(response.data));
                    setUserData(response.data);
                    setToken(String(localStorage.getItem('sanconAuthToken')));
                    setTokenData(jwtDecode(String(localStorage.getItem('sanconAuthToken'))));
                } else {
                    await logout();
                }
            } catch (e) {
                await logout();
            }
        } else {
            await logout();
        }

    }


    async function logout() {
        toast.success("Usuário deslogado!");
        setToken('');
        setUserData({} as UserData);
        setTokenData({} as TokenData);
        localStorage.removeItem('sanconAuthToken');
        localStorage.removeItem('sanconClockUser');
        localStorage.removeItem('sanconAuthTenant');
    }

    if (loading) {
        return (<LoadingComponent value='Carregando...'></LoadingComponent>);
    }

    return (
        <AuthContext.Provider value={{ authenticated: Boolean(token), token, tokenData, userData, tenant, login, logout, getEmployee }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider }