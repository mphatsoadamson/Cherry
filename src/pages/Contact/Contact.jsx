import React from "react";
import './Contact.css'
import backgroundImage from './assets/resized.jpg';



export default function Contact(){
    return(
        <div className="container">
      <header className="welcome">
        <h1>Welcome to Our Contact Page</h1>
        <p>Need Help? We're Here for You! Get in Touch with Our Support Team</p>
      </header>
      
      <section className="blurbs">
        <div className="blurb1">
        
          <h2>Location</h2>
          <p>Zomba, University Of Malawi.</p>
        </div>
        <div className="blurb2">
    
          <h2>Phone Number</h2>
          <p>+265 (0) 999 34 100</p>
          <p>+265 (0) 888 34 100</p>
        </div>
        <div className="blurb3">
        
          <h2>Email Addresses</h2>
          <p>sales@cherry.com</p>
          <p>help@cherry.com</p>
        </div>
      </section>
    </div>
    )
}