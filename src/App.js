import './App.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

import  Routes  from './pages/Routes';
import CountContextProvider from './Context/CountContext';
import AuthContextprovider from './Context/AuthContext';


function App() {
  return (
    <>
    <AuthContextprovider>
       <CountContextProvider>
         <Routes/>
      </CountContextProvider>
    </AuthContextprovider>
    </>
  );
}

export default App;
