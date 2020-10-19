import React, {useState} from 'react';
import './Register.css';
import logo from '../../assets/melivrando_icon.png';
import api from '../../services/api';
function Register(props){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    async function  handleRegister(e){
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);

        await api.post('register',data.values);

    }
    return(

        <div className='Register'>
            
        <div className='RegisterForm'>
            <div className='logoItems'>
                 <img className='logo' src={logo} alt='ML'/>
                <h2>Cadastrar-se</h2>
            </div>
            
            <div className='inputs'>
            <form onSubmit={handleRegister}>
                <input  id='name'
                        name='name'
                        placeholder='Digite o nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                    />
                <input type="email"
                    id='email'
                    name='email'
                    placeholder='Digite o email de login'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input type='password'
                    placeholder= 'Digite sua senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                 <button type="submit"> Inscrever-se </button>
            </form>
            </div>
            </div>
        </div>
    );
}

export default Register;