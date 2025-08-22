import axios from 'axios';

const options = {
  url: 'https://dashboard.render.com/v1/contactUs/createContactUs',
  withCredentials: true,
  timeout: 10000,
};

const API = axios.create(options);

export default API;

