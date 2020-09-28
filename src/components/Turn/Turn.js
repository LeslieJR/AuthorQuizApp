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
    <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
        <div className="col-4 offset-1">
            <img src={author.imageUrl} className="authorimage" alt="Author" />
        </div>
        <div className="col-6">
            {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected}/>)}
            </div>
        
    </div>)
}
export default Turn;