
import { useGetOneProducts } from '../../hooks/useProducts';
import DetailsProductPic from './details-product-pic/DetailsProductPic';
import { useParams } from 'react-router-dom';

export default function DetailsProduct() {
    const { productId } = useParams();
    // useEffect (productId) {
        const [product] = useGetOneProducts(productId);

    // }


    return (
        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lProductcol-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img className="product__details__pic__item--large"
                                    src={product.imageUrl} alt="" />

                            </div>
                            <div className="product__details__pic__slider owl-carousel">
                                <DetailsProductPic />
                                <DetailsProductPic />
                                <DetailsProductPic />
                                <DetailsProductPic />
                            </div>
                        </div>
                    </div>
                    <div className="col-lProductcol-md-6">
                        <div className="product__details__text">
                            <h3>{product.title}</h3>
                            <div className="product__details__price">{product.price}</div>
                            <p>{product.description}</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        {/* <input type="text" value="1" /> */}
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="primary-btn">ADD TO CARD</a>
                            <ul>
                                <li><b>Quantity</b> <span>{product.quantity}</span></li>
                                <li><b>Shipping</b> <span>{product.shipping} day shipping. <samp>Free pickup today</samp></span></li>
                                <li><b>Weight</b> <span>{product.weight} kg</span></li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                                        <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                                        <a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lProduct">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                        aria-selected="true">Description</a>
                                </li>
                               
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>{product.description}</p>
                                </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </section >
    );
}