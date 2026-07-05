import { useNavigate } from 'react-router-dom';


export default function CategoryProduct({
    _id,
    imageUrl,
    category
}) {
    const navigate = useNavigate();

    function navDetails(_id) {
        navigate(`/details/${_id}`);
    }
    return (
        <div className="col-lg-3" onClick={() => { navDetails(_id);}}>
            <div className="categories__item set-bg" data-setbg={imageUrl}>
                <h5><a href="#">{category}</a></h5>
            </div>
        </div>
    );
}