import axios from 'axios';

const URL = 'http://localhost:3015';

const api = axios.create({
    baseURL: `${URL}`
  })

export const getAllFood = async (id, entryId) => {
    try {
        const response = await api.get(`/user/${id}/entry/${entryId}/food`);
        return response.data;
    } catch (e) {
        console.log(e.message)
    }
}