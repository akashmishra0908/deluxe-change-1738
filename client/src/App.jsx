import './App.css';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Homepage/Footer';
import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
