import ProductsBox from './products-box/ProductsBox';

export default function CategorizedProducts() {
    return (
        <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    <ProductsBox title="Latest Products" />
                    <ProductsBox title="Top Rated Products" />
                    <ProductsBox title="Review Products" />
                </div>
            </div>
        </section>
    );
}