import React from 'react';
import './aboutUs.css';

function AboutUs() {
    return (
        <section className="about">
            <div className="about-us">
                <div className="about-text">
                    <h2>ABOUT</h2>
                    <p>A bakery business founded in 2017 by Firdausy Bashir. we cater to your desert needs by delivering freshly baked goods and confectionaries to your doorstep.</p>
                <form>
                    <button className="btn-tertiary">Learn More</button>
                </form>
                </div>
                <div className="about-img">
                    <img src="./Rectangle 3.jpg" alt="small chop"/>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;
