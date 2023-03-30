import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import Contact from './Page/Contact';
import Home from './Page/Home';
import PageNotFound from './UseParams/PageNotFound';
import Menu from './UseParams/Menu';
import Routing from './UseParams/Routing';
import Product from './Props/Product';
import User from './Props/User';

function App() {
  return (
    <>
    {/* <Router>
      <Navbar/>
      <Routes>
       <Route  path='/' element={<Home/>}/>
       <Route  path='/contact' element={<Contact/>}/>
       <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Router> */}
    
  {/* <Routing/> */}

  

  {/* <Product name="Shirt" Student={{name:"Raju",email:"raju@gmail.com"}}  /> */}
  <User/>
  
    
    </>
  );
}

export default App;
