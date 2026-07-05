import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>

                                    <li>Free Shipping for all Order of $99</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                                    <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p"></i></a>
                                </div>
                                <div className="header__top__right__auth">
                                    <Link to="/login"><i className="fa fa-user"></i> Login/Register</Link>
                                </div>
                                
                                <div className="header__top__right__auth">
                                    <Link to="/login"><i className="fa fa-user"></i> Logout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <Link to="/"><img src="img/logo.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/catalog">Catalog</Link></li>
                                <li><Link to="/shoping-cart.html">Shoping Cart</Link></li>
                                <li><Link to="/checkout.html">Check Out</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><a href="#"><i className="fa fa-shopping-bag"></i> <span>3</span></a></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    );
}