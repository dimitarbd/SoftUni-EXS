import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import Home from './Components/home/Home';
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import Register from "./Components/register/Register"
import Login from "./Components/login/Login"
import About from "./Components/about/About"
import PartDetails from './Components/part-details/PartDetails';
import PartCatalog from './Components/part-catalog/PartCatalog';
import PartImport from './Components/part-import/PartImport';
import PartEdit from './Components/part-edit/PartEdit';
import Logout from './Components/logout/Logout';


function App() {

    return (
        <AuthContextProvider>
            <div className="main-wrapper">

                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/catalog" element={<PartCatalog />} />
                    <Route path="/catalog/:partId/details" element={<PartDetails />} />
                    <Route path="/catalog/:partId/edit" element={<PartEdit />} />
                    <Route path="/catalog/import" element={<PartImport />} />
                    <Route path="/about" element={<About />} />
                </Routes>

                <Footer />

            </div>
        </AuthContextProvider>
    )
}

export default App
