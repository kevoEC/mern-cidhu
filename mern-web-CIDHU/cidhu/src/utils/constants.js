const SERVER_IP = 'http://localhost:3977';

export const ENV = {
    BASE_PATH: `http://${SERVER_IP}`,
    BASE_PATH2:`${SERVER_IP}`,
    BASE_API: `${SERVER_IP}/api/v1`,
    API_ROUTES:{
        REGISTER: 'auth/register',
        LOGIN: 'auth/login',
        USER_ME: 'user/me',
        USER: 'user',
        USERS: "users",
        DENUNCIA_GET: 'denuncia/:id',
        DENUNCIA: 'denuncia',
        DENUNCIAS: 'denuncias',
        REFRESH_ACCESS_TOKEN: 'auth/refresh_access_token'
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh"
    }
};