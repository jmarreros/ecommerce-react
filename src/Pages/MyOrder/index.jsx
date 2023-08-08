import { useContext } from "react";
import { shoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { Link, useParams } from 'react-router-dom';
import Layout from "../../Components/Layout";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrder() {
    const context = useContext(shoppingCartContext);

    let index = useParams().id; // Get params url
    if (isNaN(index)) index = context.order?.length - 1;

    const lastOrderProducts = context.order?.[index]?.products || [];

    return (
        <Layout>
            <div className='flex items-center justify-center w-80 relative mb-6'>
                <Link to='/my-orders' className='absolute left-0'>
                    <ChevronLeftIcon className='h-6 w-6'></ChevronLeftIcon>
                </Link>
                <h1>My Order</h1>
            </div>

            <div className='flex flex-col gap-4 p-6'>
                {
                    lastOrderProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images[0]}
                            price={product.price}
                        />)
                    )
                }
            </div>
        </Layout>
    )
}

export default MyOrder;