import React from 'react';
import './AuthorQuiz.css';
import './bootstrap.min.css';
import Hero from './components/Hero/Hero';
import Turn from './components/Turn/Turn';
import Continue from './components/Continue/Continue';

function AuthorQuiz() {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn />
      <Continue />
    </div>
  );
}

export default AuthorQuiz;
