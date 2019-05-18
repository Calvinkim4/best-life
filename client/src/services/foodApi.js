import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: `${URL}`
  })

export const getFood = async (id, entryId, foodId) => {
    try {
        const response = await api.get(`/user/${id}/entry/${entryId}/food/${foodId}`);
        return response.data.food;
    } catch (e) {
        console.log(e.message)
    }
}
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

export const updateFood = async (id, entryId, foodId, data) => {
    try {
        const response = await api.put(`/user/${id}/entry/${entryId}/food/${foodId}`, data);
        console.log(response.data)
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}

export const deleteFood = async (id, entryId, foodId) => {
    try {
        const response = await api.delete(`/user/${id}/entry/${entryId}/food/${foodId}`);
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}