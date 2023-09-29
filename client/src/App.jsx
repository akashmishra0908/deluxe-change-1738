import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import Product from "../src/components/products/product"

// import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Product />
    </div>
  );
}

export default App;
