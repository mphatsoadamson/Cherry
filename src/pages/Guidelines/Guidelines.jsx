import React from "react";

export default function Guidelines(){
    return(
        <div className=" container m-auto font-sans flex text-lg w-[80%] justify-evenly">
            <div className="p-1">
            <nav>
            <ul className="text-black font-bold text-right">
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#general-guidelines">General Guidelines</a></li>
                <li><a href="#content-guidelines">Content Guidelines</a></li>
                <li><a href="#user-responsibilities">User Responsibilities</a></li>
                <li><a href="#community-standards">Community Standards</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
                <p className="p-10 font-bold text-red-700 text-center">Last updated 3 may 2024</p>
                <h1 className="text-black font-bold text-[3rem] P-3 text-center">Cherry Guideline Center</h1>
    <main> 
       
        <section id="introduction">
            <h2 className="font-bold text-black text-[1.6rem] text-left p-3">Introduction</h2>
            <p>Welcome to our website! These guidelines are designed to ensure a safe, respectful, and productive environment for all users. Please read them carefully.</p>
        </section>

        <section id="general-guidelines">
            <h2 className="font-bold text-black text-[1.6rem] text-left p-3">General Guidelines</h2>
            <ol className="list-decimal">
                <li>Please communicate with respect and kindness.Any form of harassment, hate speech, or offensive language is prohibited.</li>
                <li>Ensure that all content shared on this website is appropriate and relevant. Avoid posting spam, irrelevant links, or inappropriate material.</li>
                <li>Respect the privacy of others.Do not share personal information without consent.</li>
                <li>If you encounter any issues or witness violations of these guidelines, please report them to the website administrators.</li>
            </ol>
        </section>

        <section id="content-guidelines">
            <h2 className="font-bold text-black text-[1.6rem] text-left p-3">Content Guidelines</h2>
            <p className="p-1 font-medium">When sharing content on our website, please adhere to the following guidelines:</p>
            <ol className="list-decimal">
                <li>Ensure all content is appropriate and relevant.Avoid posting spam or irrelevant links.Do not share inappropriate or offensive material.Respect intellectual property rights and attribute sources where necessary.</li>
            </ol>
                </section>
        
        <section id="user-responsibilities">
            <h2 className="font-bold text-black text-[1.6rem] text-left p-3">User Responsibilities</h2>
            <p className="p-1 font-medium">All users are expected to uphold these responsibilities:</p>
            <ol className="list-decimal">
                <li>Keep your account secure and do not share your login information with others.Be honest in your interactions and provide accurate information.Follow all local laws and regulations while using the site.</li>
            </ol>
        </section>

        <section id="community-standards">
            <h2 className="font-bold text-black text-[1.6rem] text-left p-3">Community Standards</h2>
            <p className="p-1 font-medium">Standards to maintain a positive community atmosphere:</p>
            <ol className="list-decimal">
                <li>Foster an inclusive environment where everyone feels welcome.</li>
                <li>Encourage and support other members of the community.</li>
                <li>Provide constructive feedback in a respectful manner.</li>
            </ol>
            
        </section>

        <section id="contact">
            <h2 className="font-bold text-black0 text-[1.6rem] text-left p-3">Contact Us</h2>
            <p className="p-1">If you have any questions or need to report an issue, please contact us:</p>
            <ul>
                <li>Email: help@cherry.com</li>
                <li>Phone: +265(0) 999 100 888</li>
                <li>Address: University of Malawi, Zomba, Malawi</li>
            </ul>
        </section>
    </main>

        <footer className="p-3 font-bold">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
        </footer>
            </div>
        </div>
    )
}