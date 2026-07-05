import RelatedProduct from './related-product/RelatedProduct';

export default function DetailsRelated() {
  return (
    <section className="related-product">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title related__product__title">
                    <h2>Related Product</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <RelatedProduct />
            <RelatedProduct />
            <RelatedProduct />
            <RelatedProduct />            
        </div>
    </div>
</section>
  );
}