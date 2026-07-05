import FeaturedProduct from './featured-product/FeaturedProduct';

import * as productsAPI from '../../api/product-api.js';

import { useEffect, useState } from 'react';


export default function Featured() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsAPI.getAll()
            .then(result => setProducts(result.slice(8)));
    }, []);

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".fruit">Fruit & Nut Gifts</li>
                                <li data-filter=".fresh-meat">Fresh Meat</li>
                                <li data-filter=".vegetables">Vegetables</li>
                                <li data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="section-title">
                <div className="row featured__filter">
                    {products.length > 0
                        ? products.map(product => <FeaturedProduct key={product._id} {...product} />)
                        : <h3>No products in storage</h3>
                    }
                </div>

                </div>
            </div>
        </section>
    );
}