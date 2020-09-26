import React from 'react';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Turn from './components/Turn/Turn';
import Continue from './components/Continue/Continue';
import Footer from './components/Footer/Footer';

function AuthorQuiz({turnData}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData}/>
      <Continue />
      <Footer/>
    </div>
  );
}

export default AuthorQuiz;
