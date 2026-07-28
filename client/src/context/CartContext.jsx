import { createContext, useState,useEffect } from "react";
import api from "../api";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);

     const fetchCartCount = async () => {

        try {

            const token = localStorage.getItem("token");

            if (!token) {

                setCartCount(0);

                return;

            }

            const res = await api.get("/api/cart", {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            });

            setCartCount(res.data.length);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchCartCount();

    }, []);


    return (

        <CartContext.Provider value={{ cartCount, setCartCount , fetchCartCount}}>

            {children}

        </CartContext.Provider>

    );

};

export default CartProvider;