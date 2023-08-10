import React from 'react';
import { useContext } from 'react';
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { shoppingCartContext } from '../../Context';

function Home() {

    const context = useContext(shoppingCartContext);

    const renderView = () => {
        const itemsToRender = context.searchByTitle?.length > 0 || context.setSearchByCategory?.length > 0 ? context.filteredItems : context.items;

        if (context.searchByTitle?.length > 0 && context.filteredItems?.length === 0) return (<div>No hay coincidencias</div>);

        return itemsToRender?.map((item) => (<Card key={item.id} data={item} />));
    }

    return (
        <Layout>
            <div className='flex items-center justify-center w-80 relative'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>

            <input
                type="text"
                placeholder='Search a product ...'
                value={context.searchByTitle}
                className='border border-black w-80 p-4 mb-6 mt-4 focus:outline-none text-black rounded-lg'
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />

            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    renderView()
                }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export default Home;