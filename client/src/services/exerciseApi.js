import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
    baseURL: `${URL}`
  })

  export const getExercise = async (id, entryId, exerciseId) => {
    try {
        const response = await api.get(`/user/${id}/entry/${entryId}/exercise/${exerciseId}`);
        return response.data.exercise;
    } catch (e) {
        console.log(e.message)
    }
}

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

export const updateExercise = async (id, entryId, exerciseId, data) => {
    try {
        const response = await api.put(`/user/${id}/entry/${entryId}/exercise/${exerciseId}`, data);
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}

export const deleteExercise = async (id, entryId, exerciseId) => {
    try {
        const response = await api.delete(`/user/${id}/entry/${entryId}/exercise/${exerciseId}`);
        return response.data;
    } catch (e) {
        console.log(e.message);
    }
}