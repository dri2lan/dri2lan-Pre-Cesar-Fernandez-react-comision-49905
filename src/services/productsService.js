import axios from "axios";

export async function getProducts(limite=5) {
    return await axios.get('https://dummyjson.com/products?limit=' + limite)

}

export async function getProduct(id) {
    return await axios.get('https://dummyjson.com/products/' + id)

}