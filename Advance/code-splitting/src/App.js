import logo from './logo.svg';
import './App.css';
import MyComponent from './Component/MyComponent';
// import Home from './pages/Home';
import LazyComponent from './LazyAndSuspense/LazyComponent';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <>

    {/* <Home/> */}
    {/* <MyComponent/> */}

    <LazyComponent/>

    {/* <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router> */}
    
    
    </>
  );
}

export default App;