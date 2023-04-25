import { Routes, Route, Navigate } from 'react-router-dom'

import New from '../components/New/New'
import Shop from '../components/Shop/Shop'
import Cart from '../components/Cart/Cart'
import Reward from "../components/Reward/Reward"
import Creations from "../components/Creations/Creations"
// import ProductDetails from '../components/Product/ProductDetails'
import Checkout from '../components/Cart/Checkout'
import Login from '../components/Login/Login'
import Signup from '../components/Login/Signup'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<New />} />
      <Route path='shop' element={<Shop />} />
      {/* <Route path='shop/:id' element={<ProductDetails />} /> */}
      <Route path='reward' element={<Reward/>}/>
      <Route path='creations' element={<Creations/>}/>
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      
    </Routes>
  )
}

export default Routers

