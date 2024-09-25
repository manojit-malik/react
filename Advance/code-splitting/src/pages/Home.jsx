import React from 'react';

// import dynamic from 'next/dynamic';
import Footer from '../DynamicImport/Footer';
import About from './About';


// import SideBar from "../DynamicImport/SideBar";

// const SideBar = dynamic(() => import('../DynamicImport/SideBar'), {
//     ssr: false,
//   });

const SideBar = React.lazy(()=> import('../DynamicImport/SideBar'));


const Home = () => {

    return (
        <>
        <h1>Home</h1>

        <br/><br/><br/>

        <SideBar/>

        <br/><br/><br/>

        <Footer />

        <br/><br/><br/>

        <About />
        
        
        </>
    )

}

export default Home;