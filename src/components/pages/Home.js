import React from 'react';
import '../../App.css';
import Feeds from '../Feeds';
import Cards from '../Cards';
import Footer from '../Footer';

function Home () {
    return (
        <>
        <Feeds />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;