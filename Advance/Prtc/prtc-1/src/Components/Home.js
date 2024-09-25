import {Link} from 'react-router-dom';
import { Outlet } from "react-router-dom";
import pic from '../cricket.jpeg';

const Home = () => {

    return (
        <>
        <h2>This is Home Page of Cricket</h2>

        <img src={pic} alt="Cricket" />

        <h2>(Optimizing Application performance by using Code Splitting and Lazy Loading)</h2>

        <Outlet/>
        </>
    )

}

export default Home;