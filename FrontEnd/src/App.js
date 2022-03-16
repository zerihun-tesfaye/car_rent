 import {Route,Routes,BrowserRouter} from 'react-router-dom';
 import Nav from './components/navbar/Nav';
 // page
 import Home from "./page/home/Home";
 import Cart from "./page/cart/Cart";
 import Car from "./page/car/Car";
 import Login from "./page/login/Login";
 import Register from './page/register/Register'
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <BrowserRouter>
       <Nav/>
       <Routes>
           <Route path="/" exact element={<Home/>}/>
           <Route path="/car" element={<Car/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="/register" element={<Register/>}/>
         </Routes>
          <Footer/>
       </BrowserRouter>
    </>
  );
}

export default App;
