import axios from 'axios';
import jwtDecode from 'jwt-decode';

interface TokenData {
  sub: number,
  username: string,
  roles: string[],
  iat: number,
  exp: number,
};

const authBaseURL = 'http://127.0.0.1:3000';
const clockBaseURL = 'http://127.0.0.1:4000';

axios.defaults.headers.common['Content-Type'] = 'application/json';

const authApi = axios.create({
  baseURL: authBaseURL
});

const clockApi = axios.create({
  baseURL: clockBaseURL
});


clockApi.interceptors.request.use(
  async req => {
    let authToken: string | null = localStorage.getItem('sanconAuthToken') ? localStorage.getItem('sanconAuthToken') : null;

    console.log(authToken);

    if (!authToken) {
      return req.cancelToken;
    }

    req.headers.Authorization = `Bearer ${authToken}`;

    const user: TokenData = jwtDecode(String(authToken));

    if (user.iat > user.exp) {

      const response = await axios.put(`${authBaseURL}/empresa1/api/token/refresh`, {
        oldToken: authToken
      });

      if (response.data.status == 401) {
        console.log('logot');
        return req.cancelToken;
      }

      localStorage.setItem('sanconAuthToken', response.data.token);
      req.headers.Authorization = `Bearer ${response.data.token}`;

      return req;
    };


    return req;

  }, error => {
    Promise.reject(error)
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

//     const response = await axios.put(`${authBaseURL}/empresa1/api/token/refresh`, {
//       oldToken: token
//     });

//     localStorage.setItem('sanconAuthToken', response.data.token);

//     setToken(response.data.token);

//     req.headers.Authorization = `Bearer ${response.data.token}`
//     return req;
//   });

//   return axiosInstance
// }