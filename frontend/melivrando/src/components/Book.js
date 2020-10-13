import React from 'react';

function Book(props){
    return(
        <div className='Book'>
            <img src={props.img} alt='' />
            <b>{props.title}</b>
            <b>{props.resume}</b>
            <p>Gênero: {props.gender}</p>
        </div>
    );
}

export default Book;