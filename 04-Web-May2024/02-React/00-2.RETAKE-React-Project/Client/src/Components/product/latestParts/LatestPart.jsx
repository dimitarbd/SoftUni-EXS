import { Link } from "react-router-dom";

export default function LatestPart({
    _id,
    title,
    price,
    imageUrl,
    rating
}) {
    const renderRating = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <li key={i} className={i <= rating ? "" : "silver-color"}>
                    <i className="ion-android-star"></i>
                </li>
            );
        }
        return stars;
    };

    return (
        <div className="product-slide_item">
            <div className="inner-slide">
                <div className="single-product">
                    <div className="product-img">
                        <Link to={`/catalog/${_id}/details`} className="hover-effect">
                            <img
                                className="primary-img"
                                src={imageUrl}
                                alt="Uren's Product Image"
                            />
                        </Link>                        
                    </div>
                    <div className="product-content">
                        <div className="product-desc_info">
                            <div className="rating-box">
                                <ul>
                                    {renderRating(rating)}
                                </ul>
                            </div>
                            <h6><Link className="product-name" to={`/catalog/${_id}/details`}>{title}</Link></h6>
                            <div className="price-box">
                                <span className="new-price">${Number(price).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}