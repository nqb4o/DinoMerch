import axios from "./custom-axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const fetchProductsApi = () => {
    return axios.get('/api/dinomerch/products')
}

export {
    handleLoginApi,
    fetchProductsApi
}