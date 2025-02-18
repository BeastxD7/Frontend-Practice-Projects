import axios from 'axios'
export const fetchUser = async ()=> {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users/1")
    return response.data;
}