import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify'

interface TokenData {
  sub: number,
  username: string,
  roles: string[],
  iat: number,
  exp: number,
};

const authBaseURL = 'https://sancon-auth.azurewebsites.net';
const clockBaseURL = 'https://sancon-clock-api.azurewebsites.net';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const authApi = axios.create({
  baseURL: authBaseURL,
  withCredentials: false
});

const clockApi = axios.create({
  baseURL: clockBaseURL,
  headers: { Authorization: `Bearer ` },
  withCredentials: false
});

authApi.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    toast.error(error.response.data.message);
  }
  return error;
});


clockApi.interceptors.request.use(
  async req => {
    let authToken: string | null = localStorage.getItem('sanconAuthToken') ? localStorage.getItem('sanconAuthToken') : null;

    if (!authToken) {
      toast.error('Sua sessão expirou! Faça o login novamente');
      return req.cancelToken;
    }

    if (req.headers) {
      req.headers.Authorization = `Bearer ${authToken}`;
    }

    const user: TokenData = jwtDecode(String(authToken));

    if (user.iat > user.exp) {

      const response = await axios.put(`${authBaseURL}/empresa_teste/api/token/refresh`, {
        oldToken: authToken
      });

      if (response.data.status == 401) {
        toast.error('Sua sessão expirou! Faça o login novamente');
        return req.cancelToken;
      }

      localStorage.setItem('sanconAuthToken', response.data.token);

      if (req.headers) {
        req.headers.Authorization = `Bearer ${response.data.token}`;
      }

      return req;
    };


    return req;

  }, error => {
    if (error.response.status === 401) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Erro de Conexão! - StatusCode: 500');
    }
    return error;
  }
);

export default { authApi, clockApi };


// const clockApi = () => {
//   const { token, setToken } = useContext(AuthContext);

//   console.log(token);

//   const axiosInstance = axios.create({
//     baseURL: clockBaseURL,
//     headers: { Authorization: `Bearer ${token}` }
//   });


//   axiosInstance.interceptors.request.use(async req => {

//     const user: TokenData = jwtDecode(String(token));

//     if (user.iat < user.exp) {
//       return req;
//     };

//     const response = await axios.put(`${authBaseURL}/empresa_teste/api/token/refresh`, {
//       oldToken: token
//     });

//     localStorage.setItem('sanconAuthToken', response.data.token);

//     setToken(response.data.token);

//     req.headers.Authorization = `Bearer ${response.data.token}`
//     return req;
//   });

//   return axiosInstance
// }