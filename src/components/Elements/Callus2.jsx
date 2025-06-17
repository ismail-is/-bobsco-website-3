import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-10.jpg');

class Callus2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-tb80 overlay-wraper bg-center bg-parallax bg-cover" data-stellar-background-ratio="0.5" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="overlay-main bg-black opacity-07" />
                    <div className="container">
                        <div className="section-content">
                            <div className="call-us-section text-center text-white">
                                <h4 className="m-b15">Let's work together</h4>
                                <h2 className="call-us-number m-b15 m-b0">(+291)-456-789-1234</h2>
                                <h4 className="call-us-address m-t0 m-b20">Street 4 ,45 New york City</h4>
                                <NavLink to="/contactus" className="site-button btn-effect">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Callus2;