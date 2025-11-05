import { Routes, Route, Link } from 'react-router-dom'
import Cart from './Pages/Cart'
import Callbank from './Pages/Callbank'
import Produclist from './Pages/Produclist'
import Header from "./Comp/Header";
import Footer from './Comp/Footer';
import Home from './Comp/Home';

function App () {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/callbank' element={<Callbank />} />
        <Route path='/productlist' element={<Produclist />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
