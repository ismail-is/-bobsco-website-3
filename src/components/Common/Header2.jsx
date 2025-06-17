import React from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';

var bnr = require('./../../images/background/bg-5.png');

class Header2 extends React.Component {

    constructor(props){
        super(props);
        this.state = {logo: require('./../../images/logo-light.png')};
    }

    state = { isSearchActive: false, isQuoteActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    handleQuoteToggle = () => {
        this.setState({ isQuoteActive: !this.state.isQuoteActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
           this.setState({ logo: logopath }); 
        };
    }

    render() {

        const isSearchActive = this.state.isSearchActive;
        const isQuoteActive = this.state.isQuoteActive;
        
        return (
            <>

                <header className="site-header header-style-2">
                    {/* Search Form */}
                    <div className="header-middle bg-white">
                        <div className="container">
                            <div className="logo-header">
                                <NavLink to={"./"}>
                                    <img src={this.state.logo} width={216} height={37} alt="Shapen" />
                                </NavLink>
                            </div>
                            <div className="header-info">
                                <ul>
                                    <li>
                                        <div className="icon-sm">
                                            <span className="icon-cell  text-primary"><i className="fa fa-map-marker" /></span>
                                        </div>
                                        <div className="icon-content">
                                            <strong>Newyork, USA</strong>
                                            <span>Flat 544, Reynolds Neck Str</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-sm">
                                            <span className="icon-cell  text-primary"><i className="fa fa-phone" /></span>
                                        </div>
                                        <div className="icon-content">
                                            <strong>+324 123 45 978</strong>
                                            <span>Mon - Friday: 9.00 to 18.00</span>
                                        </div>
                                    </li>
                                    <li className="btn-col-last">
                                        <NavLink to={"#"} className="site-button-secondry btn-effect">Requet a Quote</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Search Form */}
                    <div className="sticky-header main-bar-wraper">
                        <div className="main-bar header-botton nav-bg-secondry">
                            <div className="container">
                                {/* NAV Toggle Button */}
                                <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                {/* ETRA Nav */}
                                <div className="extra-nav">
                                    <div className="extra-cell">
                                        <NavLink to={"#"} onClick={this.handleSearchToggle}>
                                            <i className="fa fa-search" />
                                        </NavLink>
                                    </div>
                                    <div className="extra-cell">
                                        <NavLink to={"#"} className="contact-slide-show" onClick={this.handleQuoteToggle}><i className="fa fa-angle-left arrow-animation" /></NavLink>
                                    </div>
                                </div>
                                {/* ETRA Nav */}
                                {/* Contact Nav */}
                                <div className="contact-slide-hide " style={{ backgroundImage: 'url(' + bnr + ')', right: isQuoteActive ? '0px' : '-500px' }}>
                                    <div className="contact-nav">
                                        <NavLink to={"#"} className="contact_close" onClick={this.handleQuoteToggle}>×</NavLink>
                                        <div className="contact-nav-form p-a30">
                                            <div className="contact-info   m-b30">
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                        <p>(075) 123-7654</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Email address</h5>
                                                        <p>7xthemehelp@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper center p-b30">
                                                    <div className="icon-xs m-b20 scale-in-center"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Address info</h5>
                                                        <p>201 Liverpool Street, Suite 721, London</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="full-social-bg">
                                                <ul>
                                                    <li><NavLink to={"#"} className="facebook"><i className="fa fa-facebook" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="google"><i className="fa fa-google" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="instagram"><i className="fa fa-instagram" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="tumblr"><i className="fa fa-tumblr" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="twitter"><i className="fa fa-twitter" /></NavLink></li>
                                                    <li><NavLink to={"#"} className="youtube"><i className="fa fa-youtube" /></NavLink></li>
                                                </ul>
                                            </div>
                                            <div className="text-center">
                                                <h4 className="font-weight-600">©  2022 7xtheme</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* SITE Search */}
                                <div id="search" className={isSearchActive ? "open" : null}>
                                    <span className="close" onClick={this.handleSearchToggle} />
                                    <form role="search" id="searchform" action="/search" method="get" className="radius-xl">
                                        <div className="input-group">
                                            <input defaultValue="" name="q" type="search" placeholder="Type to search" />
                                            <span className="input-group-btn"><button type="button" className="search-btn"><i className="fa fa-search arrow-animation" /></button></span>
                                        </div>
                                    </form>
                                </div>
                                {/* MAIN Nav */}
                                <Navigation />
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    };
};

export default Header2;

