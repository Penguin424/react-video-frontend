import React from 'react';

import {Link} from 'react-router-dom';

import '../assets/styles/Login.scss';

import iconGoogle from '../assets/static/google-icon.png';
import iconTwitter from '../assets/static/twitter-icon.png';

const LoginPage = () => {
    return (
        <div>
            <section className="login">
                <section className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form">
                    <input className="input" type="text" placeholder="Correo" />
                    <input className="input" type="password" placeholder="Contraseña" />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                        </label>
                        <Link href="/">Olvidé mi contraseña</Link>
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

export  {LoginPage};