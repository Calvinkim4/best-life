import axios from 'axios';

const URL = 'http://localhost:3015';

const api = axios.create({
    baseURL: `${URL}`
  })

export const getAllFood = async (id, entryId) => {
    try {
        const response = await api.get(`/user/${id}/entry/${entryId}/food`);
        return response.data.food;
    } catch (e) {
        console.log(e.message)
    }
}

export const createFood = async (id, entryId, data) => {
    try {
        const response = await api.post(`/user/${id}/entry/${entryId}/food`, data);
        return response.data;
    } catch (e) {
        console.log(e.message)
    }
}