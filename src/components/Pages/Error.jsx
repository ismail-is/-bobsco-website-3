import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/4.jpg');

class Error extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                <Banner title="Page Not Found" pagename="Error Page" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb150">
                        <div className="container">
                            <div className="section-content">
                                <div className="page-notfound text-center">
                                    <strong>Page Not Found</strong>
                                    <span className="title">404</span>
                                    <p>The webpage you are looking for is not here!</p>
                                    <NavLink to="/homepage2" title="Back to home" className="site-button btn-effect">Back to home</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>


                <Footer />

            </>
        );
    };
};

export default Error;