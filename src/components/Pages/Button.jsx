import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/5.jpg');

class Button extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Putting a plan to action, to assure your satisfaction!" pagename="Buttons" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <ShortcodesNav />
                                <div className="col-md-9 col-sm-8">
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Border</span> Button</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="section-content">
                                            <NavLink to={"#"} className="site-button outline  black button-app m-r15 m-b15">Download on the <strong className="text-center">Google play</strong></NavLink>
                                            <NavLink to={"#"} className="site-button outline  black button-app m-r15 m-b15">Download on the <strong className="text-center">App Store</strong></NavLink>
                                        </div>
                                    </div>
                                    <div className="m-b10">
                                        <div className="mt-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark" /></div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Site</span> Button</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <div className="section-content">
                                            <button className="m-b15 site-button btn-effect m-r15 text-uppercase" type="button">Button Pramary</button>
                                            <button className="m-b15 site-button-secondry btn-effect text-uppercase " type="button">Button secondry</button>
                                        </div>
                                    </div>
                                    <div className="m-b10">
                                        <div className="mt-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark" /></div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Outline</span> Style</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <button className="m-b15 site-button outline white text-uppercase m-r15" type="button">Button white</button>
                                        <button className="m-b15 site-button outline orange text-uppercase m-r15" type="button">Button Orange</button>
                                        <button className="m-b15 site-button outline red text-uppercase m-r15" type="button">Button Red</button>
                                        <button className="m-b15 site-button outline brown text-uppercase m-r15" type="button">Button Brown</button>
                                        <button className="m-b15 site-button outline yellow text-uppercase m-r15" type="button">Button Yellow</button>
                                        <button className="m-b15 site-button outline purple text-uppercase m-r15" type="button">Button Purpal</button>
                                        <button className="m-b15 site-button outline black text-uppercase m-r15" type="button">Button Black</button>
                                        <button className="m-b15 site-button outline gray text-uppercase m-r15" type="button">Button Gray</button>
                                        <button className="m-b15 site-button outline pink text-uppercase m-r15" type="button">Button Pink</button>
                                        <button className="m-b15 site-button outline blue text-uppercase m-r15" type="button">Button Blue</button>
                                        <button className="m-b15 site-button outline green text-uppercase m-r15" type="button">Button Green</button>
                                    </div>
                                    <div className="m-b10">
                                        <div className="mt-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark" /></div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">With</span> Icon</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <button className="m-b15 site-button text-uppercase black m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Black </span></button>
                                        <button className="m-b15 site-button text-uppercase gray m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Gray </span></button>
                                        <button className="m-b15 site-button text-uppercase pink m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Pink </span></button>
                                        <button className="m-b15 site-button text-uppercase blue m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Blue </span></button>
                                        <button className="m-b15 site-button text-uppercase green m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Green </span></button>                                <button className="m-b15 site-button text-uppercase white m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button white </span></button>
                                        <button className="m-b15 site-button text-uppercase yellow m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Yellow </span></button>                                <button className="m-b15 site-button text-uppercase purple m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Purpal </span></button>
                                        <button className="m-b15 site-button text-uppercase orange m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Orange </span></button>
                                        <button className="m-b15 site-button text-uppercase red  m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Red </span></button>
                                        <button className="m-b15 site-button text-uppercase brown m-r5" type="button"><i className="fa fa-leaf" /> <span className="site-button-inr">Button Brown </span></button>
                                    </div>
                                    <div className="m-b10">
                                        <div className="mt-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark" /></div>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Bootstrap</span> Button</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <button className="m-b15 btn btn-default text-uppercase" type="button">Button Default</button>
                                        <button className="m-b15 btn btn-primary text-uppercase" type="button">Button Primary</button>
                                        <button className="m-b15 btn btn-custom text-uppercase" type="button">Button Custom</button>
                                        <button className="m-b15 btn btn-success text-uppercase" type="button">Button Success</button>
                                        <button className="m-b15 btn btn-info text-uppercase" type="button">Button Info</button>
                                        <button className="m-b15 btn btn-warning text-uppercase" type="button">Button Warning</button>
                                        <button className="m-b15 btn btn-danger text-uppercase" type="button">Button Danger</button>
                                        <button className="m-b15 btn btn-link text-uppercase" type="button">Button Link</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    };
};

export default Button;