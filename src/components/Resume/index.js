import React from 'react';
import myResume from "../../assets/resume/myResume.pdf"

function Resume () {
    
    return (
        <section className="resumeSection">
          <h1 className="section-title">Resume</h1>
          <h2 className='resumeText'>
              Download my<span> </span>
              <a href={myResume} download="sheroo-resume.pdf" className='downloadText'>resume</a>
          </h2>
          <h3 className='resumeHeading'>Front-end Proficiencies</h3>
          <ul className='listText'>
                <li>
                    HTML
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Javascript
                </li>
                <li>
                    JQuery
                </li>
                <li>
                    responsive design
                </li>
                <li>
                    React
                </li>
                <li>
                    Bootstrap
                </li>    
            </ul> 
            <h3 className='resumeHeading'>Back-end Proficiencies</h3>
          <ul className='listText'>
                <li>
                    APIs
                </li>
                <li>
                    Node
                </li>
                <li>
                    Express
                </li>
                <li>
                    MySQL, Sequelize
                </li>
                <li>
                    MongoDB, Mongoose
                </li>
                <li>
                    REST
                </li>
                <li>
                    GraphOL
                </li>    
            </ul> 

        </section>
        );
}

export default Resume;

