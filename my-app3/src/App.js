import logo from './logo.svg';
import './App.css';
import {Navbar} from './Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {About} from './About';
import {Dashboard} from './Dashboard';
import {Home} from './Home';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;