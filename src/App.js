import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://restcountries.com/v2/all?fields=name,region,area"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );

}

export default App;
