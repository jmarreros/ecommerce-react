import { PlusSmallIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { shoppingCartContext } from '../../Context';

const Card = (data) => {
    const context = useContext(shoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }

    const addProductsToCart = (productDetail) => {
        context.setCount(context.count + 1);
        context.setCartProducts([...context.cartProducts, productDetail]);
    }

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg text-black'
            onClick={() => showProduct(data.data)}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <button
                    className='absolute top-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={() => addProductsToCart(data.data)}
                >
                    <PlusSmallIcon></PlusSmallIcon>
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light px-1'>{data.data.title}</span>
                <span className='text-lg font-medium px-1'>${data.data.price}</span>
            </p>
        </div>
    );
}

export default Card;