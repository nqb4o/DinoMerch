import axios from "./custom-axios";

const handleLoginApi = (email, password) => {
    return axios.post('https://reqres.in/api/login', { email, password });
}

const handleRegisterApi = (email, password) => {
    return axios.post('https://reqres.in/api/register', { email, password })
}

const fetchProductsApi = () => {
    return axios.get('https://freetestapi.com/api/v1/products')
}

export {
    handleLoginApi,
    handleRegisterApi,
    fetchProductsApi
}