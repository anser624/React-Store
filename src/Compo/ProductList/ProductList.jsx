import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs , getFirestore } from "firebase/firestore";
import { db } from "../../firebase";
// import Card from "../Cards/Card";

const ProductList = () => {
  const [Product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const getProduct = await getDocs(collection(db, "products"));
      const result = getProduct.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(result);
      setProduct(result);
    };
    fetchProduct();
  }, []);
  return (
    <>
      <h1 className="text-center text-3xl my-15 py-10 font-bold">
        Here You Can Shop ! Some of our products are:{" "}
      </h1>
      <div className="flex px-20 justify-center flex-wrap gap-20">
        {Product.map((products) => (
          <div key={products.id} className=" flex flex-col gap-4 items-center w-[25%] py-5 px-6 border rounded-lg shadow-lg bg-white hover:shadow-amber-700 transition-shadow duration-300">
            <div className="w-full object-fill">
            <img className="object-contain w-full h-[100px]" src={products.imageUrl} alt={products.name} />
            </div>
            <h3 className="text-[20px] font-bold uppercase">{products.name}</h3>
            <h2 className="text-[22px] font-thin ">${products.price}</h2>
            <p className="text-pretty text-[13px] font-medium capitalize">{products.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
