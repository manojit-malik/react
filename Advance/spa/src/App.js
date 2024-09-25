import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Course from './pages/Course';
import Root from './Components/Root';

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Root />,
    children:[
      {path:"/", element:<Home />},
      {path:"/courses", element:<Course />}
    ]

  }
])

function App() {
  return (
    <>
    {/* <Home/> */}
    <RouterProvider router={router} ></RouterProvider>
    </>
    
  );
}

export default App;