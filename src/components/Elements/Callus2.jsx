import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/all bobsco/1.webp');

class Callus2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-tb80 overlay-wraper bg-center bg-parallax bg-cover" data-stellar-background-ratio="0.5" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="overlay-main bg-black opacity-07" />
                    <div className="container">
                        <div className="section-content">
                            <div className="call-us-section text-start text-white">
                                {/* <h4 className="m-b15">Provide You The Highest Quality Work</h4> */}
                                <h2 className="call-us-number m-b15 m-b0">Provide You The Highest Quality Work</h2>
                                <h5 className="call-us-address m-t0 m-b20">We solve worldwide industrial every problem, the heart of global landscape the <br/>industry stands multidimensional access to a wealth.</h5>
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