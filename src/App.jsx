import "./App.css";

import Header from "./components/Header";
import CategoriesSlider from "./components/Slide-Show";

import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import ProductsList from "./components/Products";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import Cart from "./components/Cart";
import About from "./components/about";
import Wishlist from "./components/Wishlist";
import CategoriesFilter from "./components/CategoriesFilter";

function App() {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100svh_-_184px)]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductsList />
                <CategoriesSlider />
              </>
            }
          />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="CreateProduct" element={<CreateProduct />} />
          <Route path="EditProduct/:productId" element={<EditProduct />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Wishlist" element={<Wishlist />} />
          <Route path="About" element={<About />} />
          <Route path="categories-filter" element={<CategoriesFilter />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
