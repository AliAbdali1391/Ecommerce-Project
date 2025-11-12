import { Routes, Route, Link } from 'react-router-dom'
import Cart from './Pages/Cart'
import Produclist from './Pages/Produclist'
import Header from './Comp/Header'
import Footer from './Comp/Footer'
import Home from './Comp/Home'
import { useState } from 'react'

function App () {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = product => {
    setCartItems(prev => [...prev, { ...product, cartId: crypto.randomUUID() }])
  }

  const handleRemoveFromCart = cartId => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId))
  }

  const handleClearCart = () => setCartItems([])

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home onAddToCart={handleAddToCart} />} />
        <Route
          path='/cart'
          element={
            <Cart
              items={cartItems}
              onRemoveItem={handleRemoveFromCart}
              onClear={handleClearCart}
            />
          }
        />
        <Route path='/productlist' element={<Produclist />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
