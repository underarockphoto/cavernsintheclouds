import './App.css';
import Slideshow from './components/slideshow/Slideshow';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components
import NavBar from './components/navbar/Navbar';
import Order from './components/order/Order';
function App() {

  return (
    <Router>
      <div className="App">
      <h1>Caverns in the Clouds</h1>
      <h2>The Story of Laurel Caverns</h2>
      <Routes>
        <Route path="/" element={<Slideshow/>}/>
        <Route path="/order" element={<Order/>}/>
      </Routes>
      <NavBar/>
      </div>
      <script
        src="https://www.paypal.com/sdk/js?client-id=BAAg2b_Euy9wo3MCeDkBkgrWwBfNlfh99i4B0nxIaWPMvqx0rQ8U8UAZQh4pCsEyUXQS4G01aDyR0o5RkE&components=hosted-buttons&enable-funding=venmo&currency=USD" 
        crossorigin="anonymous" 
        async>
      </script>
      
    </Router>
    
  );
}

export default App;
