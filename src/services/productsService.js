import axios from "axios";

/**Documentación de código
 * @description
 * @param {number} limit
 * @returns {Promise}
 */

export async function getProducts(limit = 5) {
    return await axios.get('https://dummyjson.com/products?limit=' + limit);

}

export async function getProductById(id) {
    return await axios.get('https://dummyjson.com/products/' + id);

}

export async function getProductByCategory(category) {
    return await axios.get('https://dummyjson.com/products/category/' + category);

}