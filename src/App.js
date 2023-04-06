import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import Contact from './Page/Contact';
import Home from './Page/Home';
import PageNotFound from './UseParams/PageNotFound';
import Menu from './UseParams/Menu';
import Routing from './UseParams/Routing';
import User from './Props/User';
import UseStateHooks1 from './UseStateHooks/UseStateHooks1';
import ArrayOfObject from './UseStateHooks/ArrayOfObject';
import ObjectHooks from './UseStateHooks/ObjectHooks';
import FormReactBootstrap from './Page/FormReactBootstrap';
import TimerHooks from './useEffect/TimerHooks';
import FetchApi from './useEffect/FetchApi';
import PopupModel from './Page/PopupModel';
import BootstrapReact from './ReactBoostrap/BootstrapReact';



function App() {
  return (
    <>
    {/* <FormReactBootstrap/> */}
 {/* <PopupModel/>
    <Router>
      <Navbar/>
      <Routes>
       <Route  path='/' element={<Home/>}/>
       <Route  path='/contact' element={<Contact/>}/>
       <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Router>  */}
    
  {/* <Routing/>

  {/* <User/> */}
  
  {/* <UseStateHooks1/> */}
  {/* <ArrayOfObject/> */}
  {/* <ObjectHooks/> */}
  {/* <TimerHooks/> */}
  {/* <FetchApi/> */}
  
  {/* <User/> */}
 
<BootstrapReact/>

    
    </>
  );
}

export default App;
