import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

const authBaseURL = 'http://127.0.0.1:3000';
const clockBaseURL = 'http://127.0.0.1:4000';

const authApi = axios.create({
    baseURL: authBaseURL
});

const useAxios = () => {
    const { token, userData, logout, setToken, tokenData } = useContext(AuthContext)

    const clockApi = axios.create({
        baseURL: clockBaseURL,
        headers: { Authorization: `Bearer ${token}` }
    });

    clockApi.interceptors.request.use(async req => {

        if (!token || !userData || !tokenData) {
            logout();
        }

        req.headers.Authorization = `Bearer ${token}`;

        // const user: TokenData = jwtDecode(String(token));

        if (tokenData.iat > tokenData.exp) {

            try {
                const response = await axios.put(`${authBaseURL}/empresa1/api/token/refresh`, {
                    oldToken: token
                });

                if (response.data.status == 401) {
                    logout();
                }

                setToken(response.data.token);
                localStorage.setItem('sanconAuthToken', response.data.token);
                req.headers.Authorization = `Bearer ${response.data.token}`;

                return req;
            } catch (error) {
                logout();
            }
        };

        return req;

    })

    return clockApi
}

export default useAxios;