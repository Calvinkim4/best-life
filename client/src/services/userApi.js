import axios from 'axios';

const URL = 'http://localhost:3015';

const api = axios.create({
    baseURL: `${URL}/`
  })

  