import { Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from './pages/ProductsPage'
import {Navigashion} from './components/Navigation'

function App() {
  return (
    <>
      <Navigashion />
      <Routes>
        <Route path='/' element={ <ProductsPage />}></Route>
        <Route path='/about' element={ <AboutPage />}></Route>
      </Routes>
    </>
  )
}

export default App;
