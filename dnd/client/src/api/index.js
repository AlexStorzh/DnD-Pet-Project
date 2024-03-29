import axios from 'axios'

export const API_URL = 'http://localhost:4000/auth'

const ApiInstance = axios.create({
    withCredentials: true,
    baseURL: API_URL
});


ApiInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

ApiInstance.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken)
            return ApiInstance.request(originalRequest)
        } catch (error) {
            console.log('Not authorized');
        }
    }
    throw error;
})

export default ApiInstance