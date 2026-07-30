import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import AddRecipe from "./pages/AddRecipe"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import RecipeDetails from "./components/RecipeDetails"
import Recipes from "./components/Recipes"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App