import React from 'react';
import Header from '../../components/Header/header'
import AboutUs from '../../components/About-us/aboutUs';
import Menu from '../../components/Menu/menu';
import TopPick from '../../components/Top-picks/topPick';
import Newsletter from '../../components/Newsletter/newsletter';

function Home() {
    return (
        <div>
            <Header/>
            <AboutUs/>
            <Menu/>
            <TopPick/>
            <Newsletter/>
        </div>
    )
}

export default Home;
