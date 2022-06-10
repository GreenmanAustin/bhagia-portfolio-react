import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';



function App() {
  const [categories] = useState([
      'about me',
      'portfolio',
      'contact',
      'resume'
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  console.log(currentCategory);
  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}>
      </Nav>
      <main className='flex-wrapper'>
      {(() => {
        switch (currentCategory) {
          case 'about me':
            return <About></About>
          case 'portfolio':
             return <Portfolio></Portfolio>
          case 'contact':
              return <ContactForm></ContactForm>
          case 'resume':
              return <Resume></Resume>
          default:
              return null;
        }

      })()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
