import React, { useState } from 'react';
import { LoginStyled } from './styled';
import { Input } from '../../elements/Input';
import { Button } from '../../elements/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();

    // Get Api endpoint from env
    const api_url = process.env.REACT_APP_API_URL;

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [validate, setValidate] = useState(false);

    // Validation and Login handler
    const handleLogin = e => {
        e.preventDefault();
        setValidate(true);

        if(id !== '' && name !== '') {
            // Login request
            axios.post(`${api_url}/login`, { name: name, apiKey: id })
                .then(res => {
                    dispatch({ type: 'AUTH', payload: res.data })
                })
                .catch(err => console.error(err))
        }
    }

    return (
        <LoginStyled>
            <form>
                <p>Login</p>
                <Input 
                    placeholder="Id" 
                    value={id} 
                    onChange={e => setId(e.target.value)}
                    style={validate && id === '' ? {border: `1px solid red`} : {}}
                />
                <Input 
                    placeholder="Name"
                    value={name} 
                    onChange={e => setName(e.target.value)}
                    style={validate && name === '' ? {border: `1px solid red`} : {}}
                />
                <Button onClick={e => handleLogin(e)}>Login</Button>
            </form>
        </LoginStyled>
    );
}

export default Login;