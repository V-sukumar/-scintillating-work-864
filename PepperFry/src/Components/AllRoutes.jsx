import { Routes,Route } from 'react-router-dom'
import Appliances from '../Pages/Appliances'
import Furnishing from '../Pages/Furnishing'
import Furniture from '../Pages/Furniture'
import HomeDecor from '../Pages/HomeDecor'
import KitchenAndDining from '../Pages/KitchenAndDining'
import LampsAndLighting from '../Pages/LampsAndLighting'
import Mattresses from '../Pages/Mattresses'
import Modular from '../Pages/Modular'
import GiftCard from '../Pages/GiftCard'
import HomePage from '../Pages/HomePage'
import FurnitureProducts from '../ProductsPages/FurnitureProducts'
import FurnishingProducts from '../ProductsPages/FurnishingProductsPage'
import SignUp from './SignUp'
import MattressesProductsPage from '../ProductsPages/MattressesProductsPage'
import HomeDecorProductsPage from '../ProductsPages/HomeDecorProductsPage'
import KitchenAndDiningProductsPage from '../ProductsPages/KitchenAndDiningProductsPage'
import LampsAndLightingProductsPage from '../ProductsPages/LampsAndLightingProductsPage'
import AppliancesProducts from '../ProductsPages/AppliancesProductsPages'
import SingleDataPage from '../Pages/SingleDataPage'


 const AllRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Furniture' element={<Furniture />} />
      <Route path='/Mattresses' element={<Mattresses />} />
      <Route path='/HomeDecor' element={<HomeDecor />} />
      <Route path='/Furnishing' element={<Furnishing />} />
      <Route path='/KitchenAndDining' element={<KitchenAndDining />} />
      <Route path='/LampsAndLighting' element={<LampsAndLighting />} />
      <Route path='/Appliances' element={<Appliances />} />
      <Route path='/Modular' element={<Modular />} />
      <Route path='/GiftCard' element={<GiftCard />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/FurnitureProducts' element={<FurnitureProducts/>} />
      <Route path='/FurnishingProducts' element={<FurnishingProducts />} />
      <Route path="/MatteressesProducts" element={<MattressesProductsPage />} />
      <Route path='/HomeDecorProducts' element={<HomeDecorProductsPage /> } />
      <Route path='/KitchenAndDiningProducts' element={<KitchenAndDiningProductsPage />} />
      <Route path='/LampsAndLightingProducts' element={<LampsAndLightingProductsPage />} />
      <Route path='/AppliancesProducts' element={<AppliancesProducts />} />
      <Route path='/SingleDataPage' element={<SingleDataPage />} />

    </Routes>
  )
}
export default AllRoutes