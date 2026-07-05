export default function Brand() {
   return (
    <div className="uren-brand_area">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title_area">
                    <span>Top Quality Partner</span>
                    <h3>Shop By Brands</h3>
                </div>
                <div className="brand-slider uren-slick-slider img-hover-effect_area" data-slick-options='{
                "slidesToShow": 6
                }' data-slick-responsive='[
                                        {"breakpoint":1200, "settings": {"slidesToShow": 5}},
                                        {"breakpoint":992, "settings": {"slidesToShow": 3}},
                                        {"breakpoint":767, "settings": {"slidesToShow": 3}},
                                        {"breakpoint":577, "settings": {"slidesToShow": 2}},
                                        {"breakpoint":321, "settings": {"slidesToShow": 1}}
                                    ]'>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/1.jpg" alt="Uren's Brand Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/2.jpg" alt="Uren's Brand Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/3.jpg" alt="Uren's Brand Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/4.jpg" alt="Uren's Brand Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/5.jpg" alt="Uren's Brand Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/6.jpg" alt="Uren's Brand Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/1.jpg" alt="Uren's Brand Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/7.jpg" alt="Uren's Brand Image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="single-product">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <img src="/images/brand/2.jpg" alt="Uren's Brand Image"/>
                                </a>
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