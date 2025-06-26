import React from 'react';
import logo from './assets/Logo.svg'
import restauranfood from './assets/restauranfood.jpg'

function Main(){
    return (
        <div className="container">
                <div className="nav-list">
                    <div className="section">
                        <h1>Little Lemon</h1>
                        <h3>Chicago</h3>
                        <p>
                            We are family owned Mediterranean restraunt, focused on treaditional recipes served with a modern twist.
                        </p>
                    </div>
                <div className="section">
                    <div className="section image-wrapper">
                    <img src={restauranfood} alt="server" className="serverImg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;