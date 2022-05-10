import axios from 'axios';
import config from './config.json'

const instance = axios.create({baseURL: config.API.BASE_URL});
export default instance