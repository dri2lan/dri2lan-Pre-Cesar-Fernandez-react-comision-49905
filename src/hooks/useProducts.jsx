import { useState, useEffect } from "react";
import {
  //getProductById,
  getProductByCategory,
} from "../services/productsService";

import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";
/**
 * @description Custom Hook for get products
 * @returns {Array}
 */
export const useGetProducts = (collectionName = "products") => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return { products };
};

export const useGetProductById = (collectionName = "products", id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, collectionName, id);

    getDoc(docRef).then((doc) => {
      setProduct({ id: doc.id, ...doc.data() });
    });
  }, [id]);

  return { product };
};

export const useGetProductByCategory = (category) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductByCategory(category)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return { products };
};
