import BannerProduct from './banner-product/BannerProduct';

export default function BannerBottom() {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <BannerProduct />
                    <BannerProduct />
                </div>
            </div>
        </div>
    );
}