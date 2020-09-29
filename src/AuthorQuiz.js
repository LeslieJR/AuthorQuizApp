import React from 'react';
import {Link} from 'react-router-dom';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Turn from './components/Turn/Turn';
import Continue from './components/Continue/Continue';
import Footer from './components/Footer/Footer';

function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue show={highlight === 'correct'} onContinue={onContinue}/>
      <p><Link to="/add">Add an author</Link></p>
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;
