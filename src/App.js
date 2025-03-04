import './App.css';
import Slideshow from './components/slideshow/Slideshow';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components
import NavBar from './components/navbar/Navbar';
function App() {

  return (
    <Router>
      <div className="App">
      <h1>Caverns in the Clouds</h1>
      <h2>The Story of Laurel Caverns</h2>
      <Routes>
        <Route path="/" element={<Slideshow/>}/>
      </Routes>
      <NavBar/>
      </div>
    </Router>
    
  );
}

export default App;
