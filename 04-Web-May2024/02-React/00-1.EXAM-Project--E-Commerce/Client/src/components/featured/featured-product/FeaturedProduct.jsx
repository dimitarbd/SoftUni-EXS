import { useNavigate } from 'react-router-dom';


export default function FeaturedProduct({
    _id,
    title,
    imageUrl,
    price
}) {
    const navigate = useNavigate();

    function navDetails(_id) {
        navigate(`/details/${_id}`);
    }
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
            <div className="featured__item mouse_link" onClick={() => { navDetails(_id);}}>
                <div className="featured__item__pic set-bg" data-setbg={imageUrl}>
                    <img src={imageUrl} />
                    <ul className="featured__item__pic__hover">
                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6>{title}</h6>
                    <h5>{price}lv.</h5>
                </div>
            </div>
        </div>
    );
}