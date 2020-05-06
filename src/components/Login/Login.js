import React from 'react';
import { LoginStyled } from './styled';
import { Input } from '../../elements/Input';
import { Button } from '../../elements/Button';

function Login() {
    return (
        <LoginStyled>
            <div>
                <p>Login</p>
                <Input placeholder="Id" />
                <Input placeholder="Name" />
                <Button>Login</Button>
            </div>
        </LoginStyled>
    );
}

export default Login;