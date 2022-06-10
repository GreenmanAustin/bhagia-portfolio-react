import React from 'react';
import profilePic from "../../assets/images/profile.jpeg"

function About() {
  return (
    <div>
    <section className="hero">
        <div className="hero-cta">
            <p>
                The ones who are crazy enough to think that they can change the work are the one who do. <br></br> -Steve
                Jobs
            </p>
        </div>
    </section>
    <section className='aboutSection'>
      <h1 className='section-title'>About Me</h1>
      <div className='profile-img-container'>
        <img className='profile-img' alt='this is me' src={profilePic}/>
      </div>
      <p className='aboutText'>
        I am on a journey to become a full-stack web developer.
        <br></br>
        I currently practice law and felt it was time to make a change and try something new and exciting.
      </p>
      
    </section>
    </div>
  );
}

export default About;