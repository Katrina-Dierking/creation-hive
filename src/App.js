
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Home,
  About,
  ShopHome, 
  Videos, 
  Contact, 
  SweetShop, 
  Tumblers, 
  Vinyls, 
  Pens, 
  LoveMugs, 
  Cart
} from './views/index'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/shop" element={<ShopHome/>} />
            <Route path="/videos" element={<Videos/>}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="/sweetshop" element={<SweetShop/>} />
            <Route path="/tumblers" element={<Tumblers />}/>
            <Route path="/vinyls" element={<Vinyls/>} />
            <Route path="/pens" element={<Pens/>} />
            <Route path="/lovemugs" element={<LoveMugs/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
     
      
        </BrowserRouter>
    </div>
  );
}

export default App;
