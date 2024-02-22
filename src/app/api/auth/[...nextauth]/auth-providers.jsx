"use client";
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from '../../../contexts/UserContext';
import CartContext from '../../../contexts/CartContext';

export function Provider ({ children }) {
    const queryClient = new QueryClient();
    const [userProfile, setUserProfile] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = sessionStorage.getItem('cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    const addToCart = (product, event, price, quantity) => {
        event.preventDefault();
        const amount = Number(event?.target?.[0].value);
        const priceFloat = parseFloat(price);
    
        setCartItems((prevItems) => {
            let updatedItems = [];
            const itemExists = prevItems.find((item) => item.id === product.id);
            if (!isNaN(priceFloat) && !isNaN(amount)) {
                if (itemExists) {
                    updatedItems = prevItems.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                    );
                } else {
                    updatedItems = [...prevItems, { ...product, price: priceFloat, quantity: quantity }];
                }
                sessionStorage.setItem('cart', JSON.stringify(updatedItems));
            }
            return updatedItems;
        });
    };
    
    const removeFromCart = (product) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== product.id);
            sessionStorage.setItem('cart', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        sessionStorage.clear();
    };

    return (
        <QueryClientProvider client={queryClient}>
            <UserContext.Provider value={{ profile: userProfile, setProfile: setUserProfile }}>
                <CartContext.Provider value={{ cartItems, removeFromCart, addToCart, clearCart }}>
                    {children}
                </CartContext.Provider>
            </UserContext.Provider>
        </QueryClientProvider>
    );
}
