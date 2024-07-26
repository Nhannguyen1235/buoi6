import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(1);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [card, setCard] = useState([]);
  const url = "https://66a07af87053166bcabb8822.mockapi.io/student";
  const fetchData = () => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addCard = (id) => {
    const res = products.find((item) => item.id === id);
    setCard([...card, res]);
  };
  const deleteCard = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCard(newCart);
  };

  return (
    <AppContext.Provider value={{ count, setCount, card,setCard,deleteCard, addCard, products }}>
      {children}
    </AppContext.Provider>
  );
};