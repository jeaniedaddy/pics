import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 74cfb6fed1fd27e1b782c5a5022e1dcf01bb563514ea0ff3f3c19beefa32db32'
    }
});
