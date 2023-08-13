import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { Route,Routes } from "react-router-dom";//Switch
import {Products,Product,Cart} from "./component";
import "react-loading-skeleton/dist/skeleton.css";


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
