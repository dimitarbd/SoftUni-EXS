import DetailsBreadcrumb from './details-breadcrumb/DetailsBreadcrumb';
import DetailsProduct from './details-product/DetailsProduct';
import DetailsRelated from './details-related/DetailsRelated';
import Footer from './footer/Footer';
import Header from './header/Header';
import PagePreloader from './page-preloader/PagePreloader';

export default function ShopDetails() {
  return (
      <>
      <PagePreloader />
      <Header />
      <DetailsBreadcrumb />
      <DetailsProduct />
      <DetailsRelated />
      <Footer />
      </>
  );
}