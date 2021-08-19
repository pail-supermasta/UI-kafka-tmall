import axios from 'axios';
const instance = axios.create({
    baseURL: '/kafka',
});

function sendMessage(message) {
    return instance.get('/sendMessage', { params: { message } }).then(response => response.data);
}

export default ({}, inject) => {
    inject('sendMessage', sendMessage);
};
