import React from 'react';
import Header from '../Components/Header';
import Body from '../Components/Body';
import Footer from '../Components/Footer';

const Home = () => {
    return (
       <div className='container-fluid p-l-r-0'>
           <Header />
           <Body />
           <Footer />
        </div>
    )
}

export default Home;