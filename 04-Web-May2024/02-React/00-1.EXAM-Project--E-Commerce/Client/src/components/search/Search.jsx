export default function Search() {
    return (
        <div className="hero__search">
            <div className="hero__search__form">
                <form action="#">
                    
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">SEARCH</button>
                </form>
            </div>
            <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                </div>
                <div className="hero__search__phone__text">
                    <h5>+359 888 188 88X</h5>
                    <span>support 24/7 time</span>
                </div>
            </div>
        </div>
    );
}