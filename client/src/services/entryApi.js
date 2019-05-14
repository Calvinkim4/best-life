import axios from 'axios';

const URL = 'http://localhost:3015';

const api = axios.create({
    baseURL: `${URL}`
  })


export const createEntry = async (data) => {
    try {
        const response = await api.post('/entry', data);
        return response.data.entry;
    } catch (e) {
        console.log(e.message)
    }
}

export const getAllEntries = async (id) => {
    try {
        const response = await api.get(`/user/${id}/entry`);
        return response.data;
    } catch (e) {
        console.log(e.message)
    }
}