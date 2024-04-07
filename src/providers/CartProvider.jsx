"use client";
import addToStorageCart from "@/utils/addToStorageCart";
import deleteFromStorageCart from "@/utils/deleteFromStorageCart";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || {});
    }, []);

    const addToCart = (id) => {
        addToStorageCart(id);
        setCart((prev) => ({ ...prev, [id]: 1 }));
    };

    const deleteFromCart = (id) => {
        deleteFromStorageCart(id);
        setCart((prev) => {
            const newState = { ...prev };
            delete newState[id];
            return newState;
        });
    };

    // useEffect(() => {
    //     let goods = JSON.parse(localStorage.getItem('cart'))
    //     goods = goods !== null ? goods : {}
    //     setCart(goods)
    // }, [])
    return (
        <CartContext.Provider value={[cart, addToCart, deleteFromCart]}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
