import { createContext, useState } from 'react';

export const shoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <shoppingCartContext.Provider value={{ count, setCount }}>
            {children}
        </shoppingCartContext.Provider>
    )
};