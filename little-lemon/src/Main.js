import React from 'react';
import restauranfood from './assets/restauranfood.jpg'

function Main(){
    return (
        <div className="main-container">

                <div className="section">
                    <div>
                        <h1 className="title">Little Lemon</h1>
                        <h3 className="chicago">Chicago</h3>
                        <p className="description">
                            We are family owned <br></br> 
                            Mediterranean restraunt, <br></br>
                            focused on treaditional<br></br>
                            recipes served with a modern <br></br>
                            twist.
                        </p>
                    </div>
                    
                    <div className="button-wrapper">
                        <button className="reserve-table-button">Reserve a Table</button>
                    </div>
                    
                </div>
            <div className="section-right">
                <div className="image-wrapper">
                <img src={restauranfood} alt="server" className="serverImg" />
                </div>

            </div>
        </div>
    );
}

export default Main;