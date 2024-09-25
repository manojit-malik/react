// create a react application which contains Book Library using routing concept
// Note: create a menu like Addbook, Bookdetails and Managebook

import {Addbook} from './Addbook';
import {Bookdetails} from './Bookdetails';
import {Managebooks} from './Managebooks';
import {Navbar} from './Navbar';
import {Home} from './Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './MyStyle.css'

function Assignment9 () {

    return(

        <div>

        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path='/'  element={<Home/>} />
                    <Route path='/Addbook' element={<Addbook/>} />
                    <Route path='/Bookdetails' element={<Bookdetails/>} />
                    <Route path='/Managebooks' element={<Managebooks/>} />
            </Routes>
      </BrowserRouter>

        


        </div>

    )
}

export default Assignment9;