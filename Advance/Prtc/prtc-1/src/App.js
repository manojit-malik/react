// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Suspense } from 'react';
import Home from './Components/Home';

const Teams = React.lazy(()=> import('./Components/Teams'));
const Players = React.lazy(()=> import('./Components/Players'));
const Root = React.lazy(()=> import('./Components/Root'));



const router = createBrowserRouter ([
  {
    path:"/",
    element:<Root />,
    children:[
      {path:"/", element:<Home />},
      {path:"/teams", element:<Teams />},
      {path:"/players", element:<Players/>}

    ]

  }
])

function App() {
  return (

    <div>
      <Suspense>
        <RouterProvider router={router} ></RouterProvider>
      </Suspense>
    </div>
  );
}

export default App;
