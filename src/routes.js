import { BrowserRouter, Route, Routes } from "react-router-dom"
import CarsListScreen from "./screens/carListScreen"
import CarPageScreen from "./screens/carPage"

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CarsListScreen />} />
        <Route exact path="/car/:id" element={<CarPageScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas