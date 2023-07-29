import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {
    const { id, title, imageUrl, price, handleDelete } = props;
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20' src="" alt="">
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
                </figure>
                <p className='text-sm font-light'>
                    {title}
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>
                    {price}
                </p>
                <button>
                    <XMarkIcon onClick={() => handleDelete(id)} className='h-6 w-6'></XMarkIcon>
                </button>
            </div>
        </div>
    );
}

export default OrderCard;