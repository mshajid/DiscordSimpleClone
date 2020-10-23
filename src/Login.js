import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';

function Login() {
    const signIn = () => {
};
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://forum.jellyro.com/uploads/monthly_2016_11/Discord_Purple_Tight.png.1ed2ade737b458d4ddda66c03346311a.png" alt="" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
