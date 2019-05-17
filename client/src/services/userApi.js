import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: `${URL}`
})


export const createUser = async (data) => {
  try {
    const response = await api.post('/user', data);
    return response.data;
  } catch (e) {
    console.log(e.message)
  }
}


export const getUser = async (id) => {
  try {
    const response = await api.get(`/user/${id}`);
    return response.data;

  } catch (e) {
    console.log(e.message)
  }
}



export const updateUser = async (id, data) => {
  try {
      const response = await api.put(`/user/${id}`, data);
      return response.data;
  } catch (e) {
      console.log(e.message);
  }
}
