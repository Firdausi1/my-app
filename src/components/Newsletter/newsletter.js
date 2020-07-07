import React from 'react';
import './newsletter.css'

function Newsletter() {

  return (
    <section className="news">
        <div className="newsletter">
            <div className="news-text">
                <h2>Get the latest news and others</h2>
                <p>Subscribe to our Newsletter</p>
                
            </div>
            <div className="news-form">
                <form>
                    <input className="form-input" type="text" name="address" placeholder="Enter Email Address"/>
                    <button className="form-btn"> submit</button>
                </form>
            </div>
        </div>
    </section>
  );
}

export default Newsletter;