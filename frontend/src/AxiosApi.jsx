import axios from 'axios';

export const url = 'http://192.168.1.246:8081';


const AxiosApi = axios.create({
    baseURL: url,
    
});


export default AxiosApi;