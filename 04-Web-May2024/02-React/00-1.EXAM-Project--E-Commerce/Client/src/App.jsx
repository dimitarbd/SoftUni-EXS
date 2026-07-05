import { Routes, Route, useLocation} from 'react-router-dom';

import Home from './components/Home';
import LoginRegister from './components/login-register/LoginRegister';
import ShopDetails from './components/ShopDetails';
import ShopCatalog from './components/ShopCatalog';
import { useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Scritps from './components/scripts/Scripts.jsx';


function App() {
  const [authState, setAuthstate] = useState({});
  const [reloadScripts, setReloadScripts] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    setReloadScripts(true);
    console.log('Test');
    
  }, [location]);

  const changeAuthState = (state) => {
    setAuthstate(state);
    setReloadScripts(true);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
  };



  return (
    <>
    <AuthContext.Provider value={contextData}>
    <Scritps reloadScripts={reloadScripts} setReloadScripts={setReloadScripts} />
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/catalog' element={ <ShopCatalog /> }/>
      <Route path='/details/:productId' element={ <ShopDetails /> }/>
      <Route path='/login' element={ <LoginRegister /> }/>
    </Routes>

    </AuthContext.Provider>     
    
    </>
  );
}

export default App;
