import { Link } from 'react-router-dom'

export default function Footer() {
   return (
    <div className="uren-footer_area">
       <div className="footer-middle_area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="footer-widgets_info">
                        <div className="footer-widgets_logo">
                            <Link to="#">
                                <img src="/images/menu/logo/1.png" alt="Uren's Footer Logo"/>
                            </Link>
                        </div>
                        <div className="widget-short_desc">
                            <p>We are a team of designers and developers that create high quality HTML Template &
                                Woocommerce, Shopify Theme.
                            </p>
                        </div>
                        <div className="widgets-essential_stuff">
                            <ul>
                                <li className="uren-address"><span>Address:</span> The Barn,
                                    Ullenhall, Henley
                                    in
                                    Arden B578 5CC, England</li>
                                <li className="uren-phone"><span>Call
                                Us:</span> <Link to="tel://+123123321345">+123 321 345</Link>
                                </li>
                                <li className="uren-email"><span>Email:</span> <Link to="mailto://info@yourdomain.com">info@yourdomain.com</Link></li>
                            </ul>
                        </div>
                        <div className="uren-social_link">
                            <ul>
                                <li className="facebook">
                                    <Link to="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                        <i className="fab fa-facebook"></i>
                                    </Link>
                                </li>
                                <li className="twitter">
                                    <Link to="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                        <i className="fab fa-twitter-square"></i>
                                    </Link>
                                </li>
                                <li className="google-plus">
                                    <Link to="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                        <i className="fab fa-google-plus"></i>
                                    </Link>
                                </li>
                                <li className="instagram">
                                    <Link to="https://rss.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="footer-widgets_area">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widgets_title">
                                    <h3>Information</h3>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>About Us</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Delivery Information</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Privacy Policy</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widgets_title">
                                    <h3>Customer Service</h3>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Contact Us</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Returns</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Site Map</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widgets_title">
                                    <h3>Extras</h3>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>About Us</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Delivery Information</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Privacy Policy</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widgets_title">
                                    <h3>My Account</h3>
                                </div>
                                <div className="footer-widgets">
                                    <ul>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>My Account</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Order History</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Wish List</Link></li>
                                        <li><Link to="#" onClick={(e) => e.preventDefault()}>Newsletter</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom_area">
        <div className="container-fluid">
            <div className="footer-bottom_nav">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="copyright">
                            <span><Link to="templateshub.net">Templateshub</Link></span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="payment">
                            <Link to="#">
                                <img src="/images/footer/payment/1.png" alt="Uren's Payment Method"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
   );
}