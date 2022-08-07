import axios from 'axios';
import config from '../config.json'

const instance = axios.create({baseURL: config.API.BASE_URL});
instance.defaults.withCredentials = true;
export default instance