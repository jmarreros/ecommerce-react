import { createContext, useState, useEffect } from 'react';

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

    // Shopping Cart - Order
    const [order, setOrder] = useState([]);

    // Get products
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    // Get products by title in search
    const [searchByTitle, setSearchByTitle] = useState('');

    // Get products by category in search
    const [searchByCategory, setSearchByCategory] = useState(null);



    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }


    useEffect(() => {

        if (searchByTitle && searchByCategory) {
            const itemsCategory = filteredItemsByCategory(items, searchByCategory);
            setFilteredItems(filteredItemsByTitle(itemsCategory, searchByTitle));
        } else {
            if (searchByTitle && !searchByCategory) {
                setFilteredItems(filteredItemsByTitle(items, searchByTitle))
            } else if (searchByCategory && !searchByTitle) {
                setFilteredItems(filteredItemsByCategory(items, searchByCategory))
            } else {
                setFilteredItems(items);
            }
        }


    }, [items, searchByTitle, searchByCategory]);


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
            closeCheckOutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </shoppingCartContext.Provider>
    )
};