import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { shoppingCartContext } from '../../Context';
import './style.css';

const ProductDetail = () => {
    const context = useContext(shoppingCartContext);
    return (
        <aside className={`${context.isProductDetailOpen ? '' : 'hidden'}  product-detail flex flex-col fixed bg-white text-black right-0 border border-black rounded`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <XMarkIcon className='h-6 w-6'
                    onClick={() => context.closeProductDetail()}
                ></XMarkIcon>
            </div>
        </aside>
    );
}

export default ProductDetail;