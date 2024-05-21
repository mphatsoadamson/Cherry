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
        
        <section className="head">Contact Details</section>

      <section className="blurbs">
        <div className="blurb1">
          <h2>Location</h2>
          <address><strong>Zomba, University Of Malawi</strong></address>
        </div>
        <div className="blurb2">
          <h2>Phone Number</h2>
          <address>
            <strong>+265 (0) 999 100 888</strong>
            <br />
            <strong>+265 (0) 888 100 888</strong>
          </address>
        </div>
        <div className="blurb3">
          <h2>Email Address</h2>
          <address>
            <strong>admin@cherryUnima.com</strong>
            <br />
            <strong>helpcentre@cherryUnima.com</strong>
          </address>
        </div>
      </section>
      
      <section className="cform">

        <div className="contactdetails">
            <h2>Get In Touch</h2>

        </div>

        <div className="contact-form-container">
            <form className="contact-form">
                <input type="text" placeholder="Full Name" name="user_name" required/>
                <br />
                <br />
                <input type="email" placeholder="Email" name="user_email" required/>
                <br />
                <br />
                <input type="text" placeholder="Subject" name="subject" required/>
                <br />
                <br />
                <textarea placeholder="Type your message" name="message" cols="30" rows="10" />
                <br />
                <br />
                <button type="submit">Send Message</button>
            </form>
        </div>
      </section>
    </div>
    )
}