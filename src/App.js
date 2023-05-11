
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './views/about/About';
import Home from './views/home/Home';
import Shop from './views/shop/Shop';
import Videos from './views/videos/Videos'
import Contact from './views/contact/Contact'
import SweetShop from './views/shop/shopViews/SweetShop';
import Tumblers from './views/shop/shopViews/Tumblers';
import Vinyls from './views/shop/shopViews/Vinyls';
import Pens from './views/shop/shopViews/Pens';
import LoveMugs from './views/shop/shopViews/LoveMugs';
import Cart from './views/shop/shopComponents/Cart';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/shop" element={<Shop/>} />
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
