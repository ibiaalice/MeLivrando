import React, {useState} from 'react';
import './Login.css';
import logo from '../assets/melivrando_icon.png';



export default function Login(props){
    const [email, setEmail] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        this.props.history.push('/main')
    }


    return(
        <div className='login'>
           
            <form onSubmit={handleSubmit}>
                <img className='logo' src={logo} alt='ML'/>
                <h1 className='title'>Seja bem vindo, faça login para continuar </h1>
                <input
                    placeholder='Digite o email de login'
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                <input type='password'
                    placeholder= 'Digite sua senha'
                />
                
               <button type='submit' className='buttom'>
                    <p className='enterButtom'>Entrar</p>
                </button>
                
 
            </form>

        </div>
    );
}