import Banner from '../banner/Banner';
// import Departments from '../departments/Departments';
import Search from '../search/Search';

export default function Offer() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg-3">
                        <Departments />
                    </div> */}
                    <div className="col-lg-9">
                        <Search />
                        <Banner />
                    </div>
                </div>
            </div>
        </section>
    );
}