import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./components/Product/Product"

export function AppRoutes() {
return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/product" element={<Product />}></Route>
    </Routes>
  </Router>
)

}