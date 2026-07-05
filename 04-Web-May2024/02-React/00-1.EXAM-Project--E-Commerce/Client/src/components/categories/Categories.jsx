import { useEffect, useState } from 'react';
import productsAPI from '../../api/product-api';
import CategoryProduct from './category-product/CategoryProduct';

export default function Categories() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsAPI.getAll()
            .then(result => setProducts(result.slice(4)));
    }, []);

    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                    
                        {products.map(product => <CategoryProduct key={product._id} {...product} />)}
                        
                    </div>
                </div>
            </div>
        </section>
    );
}