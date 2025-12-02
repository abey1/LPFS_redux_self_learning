import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProducts } from "./components/products/productsSlice";
import { products } from "./utils/products_list";
function App() {
  console.log("in app", products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts(products));
  });
  return (
    <div className="App">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
