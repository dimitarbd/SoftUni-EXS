import Product from './product/Product';

/**
 * @param {Object} props
 * @param {string} props.title 
 * @returns 
 */
export default function ProductsBox({ title }) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
                <h4>{title}</h4>
                <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="latest-prdouct__slider__item">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    );
}