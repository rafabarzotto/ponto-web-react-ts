import jwtDecode from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react';
import LoadingComponent from '../components/Loading';
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
    setToken: string | null;
    tokenData: TokenData;
    userData: UserData;
    login(data: LoginFormData): Promise<void>;
    logout(): void;
    getEmployee(): void;
}

interface LoginFormData {
    username: string;
    password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: any) {

    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState('');
    const [userData, setUserData] = useState<UserData>();
    const [tokenData, setTokenData] = useState<TokenData>();


    useEffect(() => {
        async function loadStorageData() {
            const storageToken = localStorage.getItem('sanconAuthToken');
            const storageUser = localStorage.getItem('sanconClockUser');

            // await new Promise(resolve => setTimeout(resolve, 2000));

            if (storageToken && storageUser) {
                setToken(storageToken);
                setUserData(JSON.parse(storageUser));
                setTokenData(jwtDecode(storageToken));
                setLoading(false);
            }

            setLoading(false);
        }

        loadStorageData();
    }, []);

    async function login(data: LoginFormData) {

        try {
            const response = await api.authApi.post('/empresa1/api/auth/login', data);

            if (response.status === 201) {
                localStorage.setItem('sanconAuthToken', response.data.token);
                setTokenData(jwtDecode(response.data.token));
                setToken(response.data.token);
            } else {
                await logout();
            }
        } catch (e) {
            await logout();
        }

    }

    async function getEmployee() {

        let dataToken: TokenData = jwtDecode(String(localStorage.getItem('sanconAuthToken')));

        try {
            const response = await api.clockApi.get('/empresa1/api/employees/userId/' + dataToken?.sub);
            if (response.status === 200) {
                localStorage.setItem('sanconClockUser', JSON.stringify(response.data));
                setUserData(response.data);
            } else {
                await logout();
            }
        } catch (e) {
            await logout();
        }

    }

    async function logout() {
        setToken('');
        setUserData({} as UserData);
        setTokenData({} as TokenData);
        localStorage.removeItem('sanconAuthToken');
        localStorage.removeItem('sanconClockUser');
    }

    if (loading) {
        return (<LoadingComponent></LoadingComponent>);
    }

    return (
        <AuthContext.Provider value={{ login, logout, authenticated: Boolean(token), token, setToken, tokenData, getEmployee, userData }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider }