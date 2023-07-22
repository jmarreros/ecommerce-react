import React from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

function Home() {
    const [items, setItems] = React.useState(null);
    React.useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return (
        <Layout>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map((item) => (<Card key={item.id} data={item} />))
                }
            </div>
        </Layout>
    )
}

export default Home;