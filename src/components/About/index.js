import React from 'react';
import profilePic from "../../assets/images/profile.jpeg"

function About() {
  return (
    <section className='aboutSection'>
      <h1 className='section-title'>About Me</h1>
      <div className='profile-img-container'>
        <img className='profile-img' src={profilePic}/>
      </div>
      <p className='aboutText'>
        I am on a journey to become a full-stack web developer.
        <br></br>
        I currently practice law and felt it was time to make a change and try something new and exciting.
      </p>
      
    </section>
  );
}

export default About;