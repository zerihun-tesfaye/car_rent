 import {Route,Routes} from 'react-router-dom';
 import Nav from './components/navbar/Nav';
 // page
  import Home from "./page/home/Home";
  import Cart from "./page/cart/Cart";
  import Car from "./page/car/Car";
  import Login from "./page/login/Login";
  import Register from './page/register/Register'
  import Footer from './components/footer/Footer';
  import Detail from './page/detail/Detail';
  import Upload from './page/upload/Upload';
  function App() {
  return (
    <>
     <div className=" w-full">
      <Nav/>

    </div>
     <div className="container-page">
       <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/car" element={<Car/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/upload" element={<Upload/>}/>
         </Routes>
          </div>
        <Footer/>
     </>
  );
}

export default App;
