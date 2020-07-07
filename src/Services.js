import React from 'react';
import './App.css';
import{Link} from 'react-router-dom';

function Services() {

  return (
    <div className="service">
        <section >
            <div className="service-heading">
                <h2>Our Services</h2>
                <p>Let Sucre Delight take care of your catering needs individual or party. Our different trays are the perfect solution for your next meeting, event, gathering.</p>
            </div>
            
            <div className="our-services">
                <div>
                    <h3>Small Chops</h3>
                    <p>We have different platters to satisfy your cravings</p>
                </div>
                <div>
                    <h3>Sweet Box</h3>
                    <p>Sweet box is filled with lots of mouth watering goodies from Cakes, brownies to dougnuts and much more</p>
                </div>
                <div>
                    <h3>Others</h3>
                    <p>We can help customize our plater to fit your liking.</p>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Services;