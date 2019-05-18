import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: `${URL}`
  })


export const createEntry = async (id) => {
    try {
        const response = await api.post(`/user/${id}/entry`);
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


export const deleteEntry = async (id, entryId) => {
    try {
        const response = await api.delete(`/user/${id}/entry/${entryId}`);
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}
