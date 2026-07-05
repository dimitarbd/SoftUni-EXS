export default function Blog() {
   return (
    <div className="uren-blog_area bg--white_smoke">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title_area">
                    <span>Our Recent Posts</span>
                    <h3>From Our Blogs</h3>
                </div>
                <div className="blog-slider uren-slick-slider slider-navigation_style-1" data-slick-options='{
                "slidesToShow": 4,
                "spaceBetween": 30,
                "arrows" : true
                }' data-slick-responsive='[
                    {"breakpoint":1200, "settings": {"slidesToShow": 3}},
                    {"breakpoint":992, "settings": {"slidesToShow": 2}},
                    {"breakpoint":768, "settings": {"slidesToShow": 2}},
                    {"breakpoint":576, "settings": {"slidesToShow": 1}}
                ]'>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="blog-img img-hover_effect">
                                <a href="blog-details-left-sidebar.html">
                                    <img src="/images/blog/large-size/1.jpg" alt="Uren's Blog Image"/>
                                </a>
                                <span className="post-date">12-09-19</span>
                            </div>
                            <div className="blog-content">
                                <h3><a href="blog-details-left-sidebar.html">Quaerat eligendi dolores autem omnis sed</a></h3>
                                <p>Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="blog-img img-hover_effect">
                                <a href="blog-details-left-sidebar.html">
                                    <img src="/images/blog/large-size/2.jpg" alt="Uren's Blog Image"/>
                                </a>
                                <span className="post-date">15-09-19</span>
                            </div>
                            <div className="blog-content">
                                <h3><a href="blog-details-left-sidebar.html">Nulla voluptatum maiores dolorem nobis</a></h3>
                                <p>Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="blog-img img-hover_effect">
                                <a href="blog-details-left-sidebar.html">
                                    <img src="/images/blog/large-size/3.jpg" alt="Uren's Blog Image"/>
                                </a>
                                <span className="post-date">19-09-19</span>
                            </div>
                            <div className="blog-content">
                                <h3><a href="blog-details-left-sidebar.html">Laudantium minus excepturi expedita dolore</a></h3>
                                <p>Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="blog-img img-hover_effect">
                                <a href="blog-details-left-sidebar.html">
                                    <img src="/images/blog/large-size/4.jpg" alt="Uren's Blog Image"/>
                                </a>
                                <span className="post-date">16-09-19</span>
                            </div>
                            <div className="blog-content">
                                <h3><a href="blog-details-left-sidebar.html">Aliquam nihil dolorem beatae totam tempora</a></h3>
                                <p>Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="blog-img img-hover_effect">
                                <a href="blog-details-left-sidebar.html">
                                    <img src="/images/blog/large-size/5.jpg" alt="Uren's Blog Image"/>
                                </a>
                                <span className="post-date">20-09-19</span>
                            </div>
                            <div className="blog-content">
                                <h3><a href="blog-details-left-sidebar.html">Reprehenderit illum iusto sit asperiores</a></h3>
                                <p>Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="inner-slide">
                            <div className="blog-img img-hover_effect">
                                <a href="blog-details-left-sidebar.html">
                                    <img src="/images/blog/large-size/6.jpg" alt="Uren's Blog Image"/>
                                </a>
                                <span className="post-date">25-09-19</span>
                            </div>
                            <div className="blog-content">
                                <h3><a href="blog-details-left-sidebar.html">Corrupti, dolore tempore totam voluptate</a></h3>
                                <p>Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?</p>
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