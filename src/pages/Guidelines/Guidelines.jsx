import React from "react";

export default function Guidelines(){
    return(
        <div className=" font-sans w-[80%] m-auto mt-3;">
            <div className="p-1">
            <nav>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#general-guidelines">General Guidelines</a></li>
                <li><a href="#content-guidelines">Content Guidelines</a></li>
                <li><a href="#user-responsibilities">User Responsibilities</a></li>
                <li><a href="#community-standards">Community Standards</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
                <p className="p-10 font-semibold">Last updated 3 may 2024</p>
                <h1 className="color: rgb(185 28 28); font-bold text-[2.6rem] P-3"> Cherry Guideline Center</h1>
    
        <section id="introduction">
            <h2 className="font-semibold text-[1.6rem] text-align:center; p-2">Introduction</h2>
            <p>Welcome to our website! These guidelines are designed to ensure a safe, respectful, and productive environment for all users. Please read them carefully.</p>
        </section>

        <section id="general-guidelines">
            <h2 className="font-semibold text-[1.6rem] text-align:center; p-2">General Guidelines</h2>
            <p>1. Please communicate with respect and kindness.Any form of harassment, hate speech, or offensive language is prohibited.</p>
            <p>2. Ensure that all content shared on this website is appropriate and relevant. Avoid posting spam, irrelevant links, or inappropriate material.</p>
            <p>3. Respect the privacy of others.Do not share personal information without consent.</p>
            <p>4. If you encounter any issues or witness violations of these guidelines, please report them to the website administrators.</p>
        </section>

        <section id="content-guidelines">
            <h2 className="font-semibold text-[1.6rem] text-align:center; p-2">Content Guidelines</h2>
            <p className="p-1 font-medium">When sharing content on our website, please adhere to the following guidelines:</p>
                <p>Ensure all content is appropriate and relevant.Avoid posting spam or irrelevant links.Do not share inappropriate or offensive material.Respect intellectual property rights and attribute sources where necessary.</p>
            </section>
        
        <section id="user-responsibilities">
            <h2 className="font-semibold text-[1.6rem] text-align:center; p-2">User Responsibilities</h2>
            <p className="p-1 font-medium">All users are expected to uphold these responsibilities:</p>
                <p>Keep your account secure and do not share your login information with others.Be honest in your interactions and provide accurate information.Follow all local laws and regulations while using the site.</p>
        </section>

        <section id="community-standards">
            <h2 className="font-semibold text-[1.6rem] text-align:center; p-2">Community Standards</h2>
            <p className="p-1 font-medium">Standards to maintain a positive community atmosphere:</p>
            <p>1. Foster an inclusive environment where everyone feels welcome.</p>
            <p>2. Encourage and support other members of the community.</p>
            <p>3. Provide constructive feedback in a respectful manner.</p>
        </section>

        <section id="contact">
            <h2 className="font-semibold text-[1.6rem] text-align:center; p-2">Contact Us</h2>
            <p>If you have any questions or need to report an issue, please contact us:</p>
            <ul>
                <li>Email: help@cherry.com</li>
                <li>Phone: +265(0) 999 100 888</li>
                <li>Address: University of Malawi, Zomba, Malawi</li>
            </ul>
        </section>

        <footer className="p-3 font-bold">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
            </div>
        </div>
    )
}