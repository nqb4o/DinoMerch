import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in',
    // timeout: 5000
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : {statusCode: response.status};
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let res = {};
    if (error.response) {
        // Request made and server responded
        res.data = error.response.data;
        res.status = error.response.status;
        res.headers = error.response.headers;
    } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    return res;
});

export default instance