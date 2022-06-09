import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories,
        setCurrentCategory,
        currentCategory
        } = props;

        useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory);
        }, [currentCategory]);
  return (
    <header className='headerstyle'>
        <h1>
            <a href="/">Sheroo</a>
        </h1>
        <nav>
            <ul className='navstyle'>
                {categories.map((category) => (
                    <li
                    className={`navlist ${
                        currentCategory === category && 'navActive'
                        }`}
                    key={category}
                    >
                    <span
                        onClick={() => {
                        setCurrentCategory(category);
                        }}
                        // className='navlist'
                    >
                        {capitalizeFirstLetter(category)}
                    </span>
                    </li>
                ))}
            </ul>
            {/* <ul>
                <li>
                    <a href="#about-me" >About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact-me">Contact</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
            </ul> */}
        </nav>
    </header>
  );
}

export default Nav;