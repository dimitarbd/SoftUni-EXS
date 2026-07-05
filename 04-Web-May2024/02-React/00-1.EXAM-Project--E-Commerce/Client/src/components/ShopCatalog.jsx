import Footer from './footer/Footer';
import GridBreadcrumb from './grid-breadcrumb/GridBreadcrumb';
import GridProductSection from './grid-product-section/GridProductSection';
import Header from './header/Header';
import PagePreloader from './page-preloader/PagePreloader';

export default function ShopCatalog() {
  return (
      <>
      <PagePreloader />
      <Header />
      <GridBreadcrumb />
      <GridProductSection />
      <Footer />
      </>
  );
}
