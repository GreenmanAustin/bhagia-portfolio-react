import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'


function Portfolio() {

    const [projects] = useState([
        {
            name: 'Late Night Eats',
            link: 'https://late-nite-bites.herokuapp.com/',
            image: 'late-night-eats.png',
            gitlink: 'https://github.com/GreenmanAustin/late-night-bites'
        },
        {
            name: 'Travel Diary',
            link: 'https://protected-plateau-77534.herokuapp.com/',
            image: 'travel-diary.png',
            gitlink: 'https://github.com/GreenmanAustin/travel-log-dashboard'
        },
        {
            name: 'City Scout',
            link: 'https://greenmanaustin.github.io/city-scout/',
            image: 'city-scout.png',
            gitlink: 'https://github.com/GreenmanAustin/city-scout'
        },
        {
            name: 'Run Buddy',
            link: 'https://greenmanaustin.github.io/run-buddy/',
            image: 'run-buddy.jpg',
            gitlink: 'https://github.com/GreenmanAustin/run-buddy'
        },
        {
            name: 'Weather Dashboard',
            link: 'https://greenmanaustin.github.io/weather-dashboard/',
            image: 'weather-dashboard.png',
            gitlink: 'https://github.com/GreenmanAustin/weather-dashboard'
        },
        {
            name: 'Budget Tracker',
            link: 'https://whispering-brook-54265.herokuapp.com/',
            image: 'budget.png',
            gitlink: 'https://github.com/GreenmanAustin/budget_tracker'
        }
        
    ]);
  return (
    <section className='portfolioSection'>
      <h1 className='section-title'>Portfolio</h1>
      <div className="portfolio">
          {projects.map((project) => (
             <div className='projects' key={project.name}>
                  <img 
                  className='project-image'
                  src={require(`../../assets/images/${project.image}`)}
                  alt={project.name}
                  />
                  <div className='links'>
                      
                  <a href={project.link} target="_blank" rel="noopener noreferrer" 
                  className='project-name'>
                      {project.name}
                  </a>
                  <a href={project.gitlink}
                  target="_blank" rel="noopener noreferrer" className="gitIcon">
                  <FontAwesomeIcon icon={faGithub} /> 
                  </a>
                  </div>
                  </div> 
          ))}
      </div>
    </section>
  );
}

export default Portfolio;