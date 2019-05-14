import axios from 'axios';

const URL = 'http://localhost:3015';

const api = axios.create({
    baseURL: `${URL}`
  })

//register user
export const createUser = async (data) => {
  try {
    const response = await api.post('/user', data);
    return response.data.user;
  } catch (e) {
    console.log(e.message)
  }
}

  
// export const getUser = async (data) => {
//   try {
//     const response = await api.post('/user/', data);
//     return response.data.user;
//   } catch (e) {
//     console.log(e.message)
//   }
// }


//login user



  