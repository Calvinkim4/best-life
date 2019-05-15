import axios from 'axios';

const URL = 'http://localhost:3015';

const api = axios.create({
    baseURL: `${URL}`
  })

export const getAllExercises = async (id, entryId) => {
    try {
        const response = await api.get(`/user/${id}/entry/${entryId}/exercise`);
        return response.data.exercise;
    } catch (e) {
        console.log(e.message)
    }
}

export const createExercise = async (id, entryId, data) => {
    try {
        const response = await api.post(`/user/${id}/entry/${entryId}/exercise`, data);
        return response.data;
    } catch (e) {
        console.log(e.message)
    }
}