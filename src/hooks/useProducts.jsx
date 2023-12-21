import { useState, useEffect } from "react";
import { getProducts, getProductById, getProductByCategory } from "../services/productsService";
/**
 * @description Custom Hook for get products
 * @returns {Array}
 */
export const useGetProducts = (limite = 10) => {

    const [products, setProducts] = useState ([]);

    useEffect (() =>{
        getProducts(limite)
        .then((res) => {
        setProducts (res.data.products)
        })
        .catch((error) => {
          console.log(error)
        });
    },[]);

    return { products }
}

export const useGetProductById = (id) => {

  const [product, setProduct] = useState ({});

  useEffect (() =>{
    getProductById(id)
    .then((res) => {
    setProduct (res.data)
    })
    .catch((error) => {
    console.log(error)
    });
},[]);

return { product }
}


export const useGetProductByCategory= (category) => {

  const [products, setProducts] = useState ([]);

  useEffect (() =>{
    getProductByCategory(category)
    .then((res) => {
    setProducts (res.data.products)
    })
    .catch((error) => {
      console.log(error)
    });
},[category]);

return { products }
}