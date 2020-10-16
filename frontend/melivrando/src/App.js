import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import './App.css';

const BOOKS = [
  {
    id:0,
    title:'Twilight',
    img : 'https://m.media-amazon.com/images/I/41t3eFaENZL._SY346_.jpg',
    resume: 'When 17 year old Isabella Swan moves to Forks, Washington to live with her father she expects that her new life will be as dull as the town.But in spite of her awkward manner and low expectations, she finds that her new classmates are drawn to this pale, dark-haired new girl in town. But not, it seems, the Cullen family. These five adopted brothers and sisters obviously prefer their own company and will make no exception for Bella. ',
    gender: 'romance'
  },
  {
    id: 1,
    title:'The Hunger Games',
    img: 'https://m.media-amazon.com/images/I/51fpAO2BjXL.jpg',
    resume:'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.',
    gender: 'distopic'
  },
  {
    id: 2,
    title:'Catching Fire',
    img: 'https://m.media-amazon.com/images/I/51tK519fUHL.jpg',
    resume:'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.',
    gender: 'distopic'
  },
  {
    id: 3,
    title:'Mockingjay',
    img: 'https://m.media-amazon.com/images/I/51tK519fUHL.jpg',
    resume:'In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.',
    gender: 'distopic'
  },

];

function App() {
  const [search, setSearch] = useState('')
  return (
    <div className='App'>
      <Header />
      <NavBar search={search} setSearch={setSearch} />
      <Switch>
        <Route exact path='/' render={props =><Main name='Lista de livros' books={BOOKS} search={search} setSearch={setSearch}/>} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
}

export default App;
