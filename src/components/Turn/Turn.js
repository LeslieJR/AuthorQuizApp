import React from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';
import './Turn.css';
import '../../bootstrap.min.css'

function Turn({author, books, highlight, onAnswerSelected}) {

    function highlightToBgColor(highlight){
        const mapping = {
            'none': '',
            'correct': 'green',
            'wrong': 'red'
        };
        return mapping[highlight]
    }
    Turn.protoTypes = {
        author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            imageSource: PropTypes.string.isRequired,
            books: PropTypes.arrayOf(PropTypes.string).isRequired
        }),
        books: PropTypes.arrayOf(PropTypes.string).isRequired,
        onAnswerSelected: PropTypes.func.isRequired,
        highlight:PropTypes.string
    }

    return( 
    <div className="turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
        <div>
            <img src={author.imageUrl} className="mx-auto d-block" alt="Author" />
        </div>
        <div className="answers mx-auto d-block">
            {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
            </div>
        
    </div>)
}
export default Turn;