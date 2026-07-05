export default function BestSellingProduct() {
   return (
    <div className="best-selling-product_area">
    <div className="container-fluid">
        <div className="section-title_area">
            <span>Top Best Selling On This Week</span>
            <h3>Best Selling Products</h3>
        </div>
        <div className="row no-gutters">
            <div className="col-xl-2 col-md-4 col-sm-4">
                <div className="banner-item best-selling_banner img-hover_effect"></div>
            </div>
            <div className="col-xl-10 col-md-8 col-sm-8">
                <div className="best-selling_slider uren-slick-slider slider-navigation_style-1 img-hover-effect_area" data-slick-options='{
            "slidesToShow": 5,
            "arrows" : true,
            "rows": 2
            }' data-slick-responsive='[
                {"breakpoint":1501, "settings": {"slidesToShow": 4}},
                {"breakpoint":1200, "settings": {"slidesToShow": 2}},
                {"breakpoint":768, "settings": {"slidesToShow": 1, "rows": 1}},
                {"breakpoint":575, "settings": {"slidesToShow": 1, "rows": 2}}
            ]'>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/1-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/1-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker">
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Veniam officiis
                                                voluptates</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$122.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/2-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/2-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker-area-2">
                                        <span className="sticker-2">-20%</span>
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Corporis sed
                                                excepturi</a></h6>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$194.00</span>
                                            <span className="old-price">$241.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/3-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/3-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Quidem iusto
                                                sapiente</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$175.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/4-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/4-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker-area-2">
                                        <span className="sticker-2">-5%</span>
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Ullam excepturi
                                                nesciunt</a></h6>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$145.00</span>
                                            <span className="old-price">$190.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/5-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/5-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Voluptatem obcaecati</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="new-price">$130.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/6-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/6-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker-area-2">
                                        <span className="sticker-2">-15%</span>
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Labore aliquid
                                                eos</a></h6>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$240.00</span>
                                            <span className="old-price">$320.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/7-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/7-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Enim nobis
                                                numquam</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$190.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/8-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/1-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Dolorem voluptates
                                                aut</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$250.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/1-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/1-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker">
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Veniam officiis
                                                voluptates</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$122.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/2-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/2-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker-area-2">
                                        <span className="sticker-2">-20%</span>
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Corporis sed
                                                excepturi</a></h6>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$194.00</span>
                                            <span className="old-price">$241.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/3-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/3-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Quidem iusto
                                                sapiente</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$175.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/4-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/4-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker-area-2">
                                        <span className="sticker-2">-5%</span>
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Ullam excepturi
                                                nesciunt</a></h6>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$145.00</span>
                                            <span className="old-price">$190.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/5-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/5-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Voluptatem obcaecati</a>
                                        </h6>
                                        <div className="price-box">
                                            <span className="new-price">$130.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/6-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/6-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker-area-2">
                                        <span className="sticker-2">-15%</span>
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Labore aliquid
                                                eos</a></h6>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$240.00</span>
                                            <span className="old-price">$320.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/7-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/7-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Enim nobis
                                                numquam</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$190.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/8-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/1-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Dolorem voluptates
                                                aut</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$250.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/1-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/1-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker">
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Veniam officiis
                                                voluptates</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$122.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/2-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/2-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker-area-2">
                                        <span className="sticker-2">-20%</span>
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Corporis sed
                                                excepturi</a></h6>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$194.00</span>
                                            <span className="old-price">$241.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/3-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/3-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <span className="sticker">New</span>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Quidem iusto
                                                sapiente</a></h6>
                                        <div className="price-box">
                                            <span className="new-price">$175.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-slide_item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <div className="product-img">
                                    <a href="single-product.html">
                                        <img className="primary-img" src="/images/product/medium-size/4-1.jpg" alt="Uren's Product Image"/>
                                        <img className="secondary-img" src="/images/product/medium-size/4-2.jpg" alt="Uren's Product Image"/>
                                    </a>
                                    <div className="sticker-area-2">
                                        <span className="sticker-2">-5%</span>
                                        <span className="sticker">New</span>
                                    </div>
                                    <div className="add-actions">
                                        <ul>
                                            <li><a className="uren-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a>
                                            </li>
                                            <li><a className="uren-wishlist" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                className="ion-android-favorite-outline"></i></a>
                                            </li>
                                            <li><a className="uren-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                className="ion-android-options"></i></a>
                                            </li>
                                            <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" onClick={(e) => {
                                                e.preventDefault();
                                                handleClick();
                                            }} data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                className="ion-android-open"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <div className="product-desc_info">
                                        <div className="rating-box">
                                            <ul>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                                <li className="silver-color"><i className="ion-android-star"></i></li>
                                            </ul>
                                        </div>
                                        <h6><a className="product-name" href="single-product.html">Ullam excepturi
                                                nesciunt</a></h6>
                                        <div className="price-box">
                                            <span className="new-price new-price-2">$145.00</span>
                                            <span className="old-price">$190.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   );
}