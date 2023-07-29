import { XMarkIcon } from '@heroicons/react/24/solid';
import OrderCard from '../../Components/OrderCard';
import { useContext } from 'react';
import { shoppingCartContext } from '../../Context';
import { totalPrice } from '../../utils';
import './style.css';

const CheckOutSideMenu = () => {
    const context = useContext(shoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter((product) => product.id !== id);
        context.setCartProducts(filteredProducts);
    }

    return (
        <aside className={`${context.isCheckOutSideMenuOpen ? '' : 'hidden'} checkout-side-menu flex flex-col fixed bg-white text-black right-0 border border-black rounded`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <button>
                    <XMarkIcon className='h-6 w-6'
                        onClick={() => context.closeCheckOutSideMenu()}
                    ></XMarkIcon>
                </button>
            </div>
            <div className='flex flex-col gap-4 p-6 overflow-y-scroll'>
                {
                    context.cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />)
                    )
                }
            </div>
            <div className='p-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    )
}

export default CheckOutSideMenu;