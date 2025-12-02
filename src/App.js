import logo from "./logo.svg";
import "./App.css";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
function App() {
  return (
    <div className="App">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
