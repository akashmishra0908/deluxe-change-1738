import './App.css';
import AllRoutes from './components/AllRoutes';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
