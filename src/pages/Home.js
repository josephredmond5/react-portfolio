import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Joseph Redmond</h2>
        <div className='prompt'>
          <p>a software dev with a passion for learning and creating</p>
          <a href="https://www.linkedin.com/in/joseph-redmond-4421a527a/">
            <LinkedInIcon />
          </a>
          <a href="mailto:josephredmond5@icloud.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/josephredmond5">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>front-end</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, React Testing Library(TTD)
            </span>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>back-end</h2>
            <span>
              NodeJS, ExpressJS, MySQL, Docker, SQL, Express.js, Postman
            </span>
          </li>
        </ol>
        <ol className='list'>
          <li className='item'>
            <h2>languages</h2>
            <span>
              Javascript, HTML, CSS, JSX, SQL
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
