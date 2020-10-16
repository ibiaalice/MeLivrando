import React from 'react'
import Book from '../../components/Book';
import './Main.css';

function Main(props) {
  return (
      <div className='Main'>
        <div className='title'>
          <h2>{props.name}</h2>
        </div>
         
        <br />
        <div id='container'>
         {
          props.books.filter(book => book.title.includes(props.search)).map(
            book => <a href='/'>
              <Book
                img={book.img}
                title={book.title}
                resume={book.resume}
                gender={book.gender}
              >
              </Book>
            </a>
            )
        }
        </div>
      </div>
  )
}

export default Main;