import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../../firebase";
import Card from "../Cards/Card";

const ProductList = () => {
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const getProduct = await getDocs(collection(db, "products"));
      const result = getProduct.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(result);
      setLoading(true);
      setProduct(result);
    };
    setLoading(false);
    fetchProduct();
  }, []);
  return (
    <>
      <h1 className="text-center text-4xl sm:text-[3xl] my-15 py-10 font-bold">
        Here You Can Shop ! Some of our products are:{" "}
      </h1>
      {loading ? (
        <div className="flex px-20 justify-center flex-wrap gap-20">
          {Product.map((products) => (
            <Card
              src={products.imageUrl}
              name={products.name}
              price={products.price}
            />
          ))}
        </div>
      ) : (
        <span className="flex items-center text-3xl font-bold capitalize justify-center gap-2 text-gray-500">
          Loading
          <svg class=" size-8 animate-spin ..." viewBox="0 0 24 24">
            <path
              fill="gray"
              d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm3.707 7.293l-4.5 4.5a1 1 0 0 1-1.414-1.414l4.5-4.5a1 1 0 0 1 1.414 1.414zM12 6a6 6 0 1 1-6 6a6.007 6.007 0 0 1 6-6z"
            ></path>
          </svg>
        </span>
      )}
    </>
  );
};

export default ProductList;
