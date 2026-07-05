import Categories from './categories/Categories';
import Featured from './featured/Featured';
import Footer from './footer/Footer';
import Header from './header/Header';
import CategorizedProducts from './latest-product/CategorizedProducts';
import Offer from './offer/Offer';
import PagePreloader from './page-preloader/PagePreloader';

export default function Home() {
  return (
    <>   
      <PagePreloader />
      <Header />
      <Offer />
      <Categories />
      <Featured />
      <CategorizedProducts />
      <Footer />
    </>
  );
}

