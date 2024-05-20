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

        <div className="contactdetails">
            <h2>Get In Touch</h2>
            <address>
                <strong>Email: helpcentre@cherry.com</strong>
                <br />
                <br />
                <p>
                    <strong>Phone:+265 (0) 999 444 300</strong>
                </p>
            </address>
            <p>Feel free to contact us for an problems your are facing on the platform. To know how to navigate throu</p>

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