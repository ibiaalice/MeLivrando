import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import Book from '../components/Book';


describe('Teste do componente Book', () =>{
    const book = {
        id:0,
        title:'Twilight',
        img : 'https://m.media-amazon.com/images/I/41t3eFaENZL._SY346_.jpg',
        resume: 'When 17 year old Isabella Swan moves to Forks, Washington to live with her father she expects that her new life will be as dull as the town.But in spite of her awkward manner and low expectations, she finds that her new classmates are drawn to this pale, dark-haired new girl in town. But not, it seems, the Cullen family. These five adopted brothers and sisters obviously prefer their own company and will make no exception for Bella. ',
        gender: 'romance'
    }
    
    const setup = (props) => {
        const container = render(<Book {...props} />);
        const title = container.querySelector('.title');
        const resume = container.querySelector('.resume');
        const gender = container.querySelector('.gender');
        return {title, resume, gender};
    }


    it('deve renderizar o componente sem erro', ()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Book  />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('deve me retornar o titulo correto do livro', ()=>{
        const {title} = setup({...book});
        expect(title.innerHTML).toBe('Twilight');
    });

    it('deve me retornar o resumo correto do livro', ()=>{
        const {resume} = setup({...book});
        const resumeExpec ='When 17 year old Isabella Swan moves to Forks, Washington to live with her father she expects that her new life will be as dull as the town.But in spite of her awkward manner and low expectations, she finds that her new classmates are drawn to this pale, dark-haired new girl in town. But not, it seems, the Cullen family. These five adopted brothers and sisters obviously prefer their own company and will make no exception for Bella' 
        expect(resume.innerHTML).toBe(resumeExpec);
    });



})


