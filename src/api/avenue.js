import axios from 'axios'

export function getArticle() {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>{
            console.log(response.data);
            return response.data;
        })
        .catch((error)=>{
            console.log(error);
        })
}
