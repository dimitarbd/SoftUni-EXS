export default function About() {
    return (
        <>
            {/* <!-- Begin Uren's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Other</h2>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li className="active">About Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Uren's Breadcrumb Area End Here */}
            {/* Begin Uren's About Us Area */}
            <div className="about-us-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-5">
                            <div className="overview-img text-center img-hover_effect">
                                <a href="#">
                                    <img className="img-full" src="assets/images/about-us/1.jpg" alt="Uren's About Us Image" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-7 d-flex align-items-center">
                            <div className="overview-content">
                                <h2>Welcome To <span>Uren's</span> Store!</h2>
                                <p className="short_desc">We Provide Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Repudiandae nisi fuga facilis, consequuntur, maiores eveniet voluptatum, omnis possimus
                                    temporibus aspernatur nobis animi in exercitationem vitae nulla! Adipisci ullam illum quisquam.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nulla veniam? Magni aliquid
                                    asperiores magnam. Veniam ex tenetur.</p>
                                <div className="uren-about-us_btn-area">
                                    <a className="about-us_btn" href="shop-left-sidebar.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Uren's About Us Area End Here */}

            {/* Begin Uren's Project Countdown Area */}
            <div className="project-count-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count text-center">
                                <div className="count-icon">
                                    <span className="ion-ios-briefcase-outline"></span>
                                </div>
                                <div className="count-title">
                                    <h2 className="count">2169</h2>
                                    <span>Project Done</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count text-center">
                                <div className="count-icon">
                                    <span className="ion-ios-wineglass-outline"></span>
                                </div>
                                <div className="count-title">
                                    <h2 className="count">869</h2>
                                    <span>Awards Winned</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count text-center">
                                <div className="count-icon">
                                    <span className="ion-ios-lightbulb-outline"></span>
                                </div>
                                <div className="count-title">
                                    <h2 className="count">689</h2>
                                    <span>Hours Worked</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-count text-center">
                                <div className="count-icon">
                                    <span className="ion-happy-outline"></span>
                                </div>
                                <div className="count-title">
                                    <h2 className="count">2169</h2>
                                    <span>Happy Customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Uren's Project Countdown Area End Here */}

            {/* Begin Uren's Team Area */}
            <div className="team-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="section_title-2">
                                <h3>Our Team</h3>
                            </div>
                        </div>
                    </div>
                    {/* section title end */}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-member">
                                <div className="team-thumb img-hover_effect">
                                    <a href="#">
                                        <img src="assets/images/about-us/team/1.jpg" alt="Our Team Member" />
                                    </a>
                                </div>
                                <div className="team-content text-center">
                                    <h3>Edwin Adams</h3>
                                    <p>IT Expert</p>
                                    <a href="#">info@example.com</a>
                                    <div className="uren-social_link">
                                        <ul>
                                            <li className="facebook">
                                                <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </li>
                                            <li className="youtube">
                                                <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="google-plus">
                                                <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                    <i className="fab fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li className="instagram">
                                                <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single team member */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-member">
                                <div className="team-thumb img-hover_effect">
                                    <a href="#">
                                        <img src="assets/images/about-us/team/2.jpg" alt="Our Team Member" />
                                    </a>
                                </div>
                                <div className="team-content text-center">
                                    <h3>Anny Adams</h3>
                                    <p>Web Designer</p>
                                    <a href="#">info@example.com</a>
                                    <div className="uren-social_link">
                                        <ul>
                                            <li className="facebook">
                                                <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </li>
                                            <li className="youtube">
                                                <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="google-plus">
                                                <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                    <i className="fab fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li className="instagram">
                                                <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single team member */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-member">
                                <div className="team-thumb img-hover_effect">
                                    <a href="#">
                                        <img src="assets/images/about-us/team/3.jpg" alt="Our Team Member" />
                                    </a>
                                </div>
                                <div className="team-content text-center">
                                    <h3>Edvin Adams</h3>
                                    <p>Content Writer</p>
                                    <a href="#" onClick={(e) => e.preventDefault()}>info@example.com</a>
                                    <div className="uren-social_link">
                                        <ul>
                                            <li className="facebook">
                                                <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </li>
                                            <li className="youtube">
                                                <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="google-plus">
                                                <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                    <i className="fab fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li className="instagram">
                                                <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single team member */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-member">
                                <div className="team-thumb img-hover_effect">
                                    <a href="#">
                                        <img src="assets/images/about-us/team/4.jpg" alt="Our Team Member" />
                                    </a>
                                </div>
                                <div className="team-content text-center">
                                    <h3>Eddy Adams</h3>
                                    <p>Marketing officer</p>
                                    <a href="#">info@example.com</a>
                                    <div className="uren-social_link">
                                        <ul>
                                            <li className="facebook">
                                                <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="twitter">
                                                <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </li>
                                            <li className="youtube">
                                                <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li className="google-plus">
                                                <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                    <i className="fab fa-google-plus"></i>
                                                </a>
                                            </li>
                                            <li className="instagram">
                                                <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end single team member */}
                    </div>
                </div>
            </div>
            {/* Uren's Team Area End Here */}
        </>
    );
}