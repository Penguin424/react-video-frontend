import React, {useState} from 'react';
import { connect } from "react-redux";

import {Link} from 'react-router-dom';
import {loginRequest} from '../actions/index.js';

import '../assets/styles/Login.scss';

import iconGoogle from '../assets/static/google-icon.png';
import iconTwitter from '../assets/static/twitter-icon.png';

const LoginPage = (props) => {

    

    const [ form, setValues] = useState({email: '', password: ''})

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        console.log(form);
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <div>
            <section className="login">
                <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit} >
                    <input 
                        name="email"
                        className="input" 
                        type="text" 
                        placeholder="Correo" 
                        onChange={handleInput}
                    />
                    <input 
                        name="password" 
                        className="input" 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={handleInput}
                    />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                        </label>
                        <Link to="/">Olvidé mi contraseña</Link>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={iconGoogle} /> Inicia sesión con Google</div>
                    <div><img src={iconTwitter} /> Inicia sesión con Twitter</div>
                </section>
                    <p className="login__container--register">No tienes ninguna cuenta <Link to="/register">Regístrate</Link></p>
                </section>
            </section>
        </div>

    );
};

const mapDispathcToProps = {
    loginRequest
}

export default connect(null, mapDispathcToProps)(LoginPage)