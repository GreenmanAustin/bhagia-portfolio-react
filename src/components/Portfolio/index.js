import React, {useState} from 'react';


function Portfolio() {
    const [projects] = useState([
        {
            name: 'Late Night Eats',
            link: 'https://late-nite-bites.herokuapp.com/',
            image: './assets/images/late-night-eats.png',
            gitlink: 'https://github.com/GreenmanAustin/late-night-bites'
        },
        {
            name: 'Travel Diary',
            link: 'https://protected-plateau-77534.herokuapp.com/',
            image: './assets/images/travel-diary.png',
            gitlink: 'https://github.com/GreenmanAustin/travel-log-dashboard'
        },
        {
            name: 'City Scout',
            link: 'https://greenmanaustin.github.io/city-scout/',
            image: './assets/images/city-scout.png',
            gitlink: 'https://github.com/GreenmanAustin/city-scout'
        },
        {
            name: 'Run Buddy',
            link: 'https://greenmanaustin.github.io/run-buddy/',
            image: './assets/images/run-buddy.jpg',
            gitlink: 'https://github.com/GreenmanAustin/run-buddy'
        },
        {
            name: 'Weather Dashboard',
            link: 'https://greenmanaustin.github.io/weather-dashboard/',
            image: './assets/images/refractor.jpg',
            gitlink: 'https://github.com/GreenmanAustin/weather-dashboard'
        }
        
    ]);
  return (
    <section className='portfolioSection'>
      <h1 className='section-title'>Portfolio</h1>
      <div className="flex-row">
          {projects.map((project) => (
              <div className='projectImage'>
                  <img alt={`${project.name}`} src= {project.image}/>



              </div>
          ))}

      </div>
    </section>
  );
}

export default Portfolio;