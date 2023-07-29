import { createContext, useState } from 'react';

export const shoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping cart - Increment quantity
    const [count, setCount] = useState(0);

    // Shopping cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([]);

    // Checkout side menu - Open close   
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

    // Product detail - Open close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product detail - Show product
    const [productToShow, setProductToShow] = useState({});

    return (
        <shoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
};