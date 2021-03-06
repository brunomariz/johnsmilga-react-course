import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// Setup vars
import { books } from './books.js';
import Book from './Book.js';

// Components
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
