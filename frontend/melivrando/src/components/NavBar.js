import React from 'react';
import './NavBar.css';
import logo from '../assets/melivrando_icon.png';

function NavBar(props){
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt='MeLivrando Logo' />
            <h1> MeLivrando </h1>
            <input
             type='search'
             id='search'
             value={props.search}
             onChange={(e)=>props.setSearch(e.target.value)}
             />
            <div className='routes'>
                <a href='/'>Início</a>
                <a href='/login'>Login</a>
                <a href='/register'>Inscreva-se</a>
            </div>
        </div>
    );
}

export default NavBar;