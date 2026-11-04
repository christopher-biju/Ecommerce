import './App.css'
import Products from './pages/Products'
import Whishlist from './pages/Whishlist'
import Cart from './pages/Cart'
import View from './pages/Cart'
import Pnf from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'

import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/whishlist' element={<Whishlist />} />
        <Route path='/products/:id' element={<View />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
