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
        <div className="blurb">
          <i className="fas fa-comments icon"></i>
          <h2>Click to Chat</h2>
          <p>Have a quick question? Chat with our support team instantly.</p>
        </div>
        <div className="blurb">
          <i className="fas fa-phone icon"></i>
          <h2>Call to Call</h2>
          <p>Prefer to speak with us directly? Give us a call.</p>
        </div>
        <div className="blurb">
          <i className="fas fa-envelope icon"></i>
          <h2>Click to Mail</h2>
          <p>Send us an email, and we'll get back to you as soon as possible.</p>
        </div>
      </section>
    </div>
    )
}