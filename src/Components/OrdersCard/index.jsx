import { CalendarIcon, ListBulletIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
    const { totalPrice, totalProducts } = props;
    return (
        <div className='flex justify-between items-center border border-white p-4 mt-4 w-96 rounded-md'>
            <div>
                <div className='flex'><CalendarIcon className='w-6 mr-2' /> <span>01.01.2023</span></div>
                <div className='flex'><ListBulletIcon className='w-6 mr-2' /> <span className='mr-2'>Cantidad: </span> <span> {totalProducts} </span></div>
            </div>
            <div className='flex'>
                <div className='text-lg font-bold'>{totalPrice} USD</div>
                <ChevronRightIcon className='w-4 ml-4' />
            </div>
        </div>
    );
}

export default OrdersCard;