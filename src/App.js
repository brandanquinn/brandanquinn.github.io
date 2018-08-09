import React, { Component } from 'react';
import portrait from './portrait.gif';
import linkedin from './icons/linkedin-logo.png';
import github from './icons/mark-github.svg';
import pdf from './icons/adobe-pdf-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <img className='portrait' src={portrait} height='200' width='150'/>
        <h3>Brandan Quinn</h3>
        <hr />
        <h4>Computer Science Student | Software Developer</h4>
        <div className='info'>
          <div className='page columns'>
              <img className='icon column' src={linkedin} height='25px' width='25px' />
              <a className='column' href='https://www.linkedin.com/in/brandan-quinn-7a3a8312b/' target='_blank'>My LinkedIn Profile</a>
          </div>
          <hr className='page-break'/>
          <div className='page columns'>
              <img className='icon column' src={github} height='25px' width='25px' />
              <a className='column' href='https://github.com/brandanquinn' target='_blank'>My GitHub Profile</a>
          </div>
          <hr className='page-break'/>
          <div className='page columns'>
              <img className='icon column' src={pdf} height='25px' width='25px' />
              <a className='column' href='https://drive.google.com/file/d/1BdbKaWqBRg4q6XDgPVJvgWWb306nQovG/view?usp=sharing' target='_blank'>My Resume</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
