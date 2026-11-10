import './App.css'
import Products from './pages/Products'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/products/:id' element={<View />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
