
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './views/about/About';
import Home from './views/home/Home';
import Shop from './views/shop/Shop';
import Videos from './views/videos/Videos'
import Contact from './views/contact/Contact'

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
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
