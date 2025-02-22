import axios from 'axios'
export const fetchProducts = async() => {
    
    const response = await axios.get("https://dummyjson.com/products")
    console.log(response.data);
    
    return response.data
}