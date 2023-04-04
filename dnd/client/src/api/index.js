import axios from 'axios'

export const API_URL = 'http://localhost:4000/api'

const ApiInstance = axios.create({
    withCredentials: true,
    baseURL: API_URL
});


ApiInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default ApiInstance