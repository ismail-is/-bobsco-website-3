import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-4.png');

class Pricing extends React.Component {
    render() {
        return (
            <>
                <div className="section-full text-center bg-gray bg-no-repeat p-t80 p-b50 bg-top-right mobile-page-padding" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our </span> Pricing</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="pricingtable-row">
                                <div className="row">
                                    <div className="col-lg-4  col-md-4 col-sm-4  col-xs-6 col-xs-100pc  m-b30">
                                        <div className="pricingtable-wrapper pricing-table-style-5 bg-white overflow-hide hover-shadow bdr-t-4 bdr-solid bdr-primary">
                                            <div className="pricingtable-inner">
                                                <div className="pricingtable-title">
                                                    <h4>Basic Plan</h4>
                                                </div>
                                                <div className="pricingtable-price">
                                                    <span className="pricingtable-bx">$29</span>
                                                    <span className="pricingtable-type">Month</span>
                                                </div>
                                                <ul className="pricingtable-features text-black">
                                                    <li>Phone &amp; Email Support</li>
                                                    <li>3 Social Account </li>
                                                    <li>Branded Reports</li>
                                                </ul>
                                                <div className="pricingtable-footer">
                                                <NavLink to="/about" className="site-button btn-effect">Purchase</NavLink>
                                                </div>
                                                <div className="overlay-main bg-white opacity-07" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4  col-sm-4  col-xs-6 col-xs-100pc m-b30">
                                        <div className="pricingtable-wrapper  pricing-table-style-5 overflow-hide hover-shadow bdr-t-4 bdr-solid bdr-primary">
                                            <div className="pricingtable-inner">
                                                <div className="pricingtable-title">
                                                    <h4>Pro Plan</h4>
                                                </div>
                                                <div className="pricingtable-price">
                                                    <span className="pricingtable-bx">$49</span>
                                                    <span className="pricingtable-type">Month</span>
                                                </div>
                                                <ul className="pricingtable-features text-black">
                                                    <li>Phone &amp; Email Support</li>
                                                    <li>3 Social Account </li>
                                                    <li>Branded Reports</li>
                                                </ul>
                                                <div className="pricingtable-footer">
                                                <NavLink to="/about" className="site-button btn-effect">Purchase</NavLink>
                                                </div>
                                                <div className="overlay-main bg-white opacity-07" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4  col-sm-4  col-xs-12 m-b30">
                                        <div className="pricingtable-wrapper  pricing-table-style-5 overflow-hide hover-shadow bdr-t-4 bdr-solid bdr-primary bg-gray">
                                            <div className="pricingtable-inner">
                                                <div className="pricingtable-title">
                                                    <h4>Premium Plan</h4>
                                                </div>
                                                <div className="pricingtable-price">
                                                    <span className="pricingtable-bx">$99</span>
                                                    <span className="pricingtable-type">Month</span>
                                                </div>
                                                <ul className="pricingtable-features text-black">
                                                    <li>Phone &amp; Email Support</li>
                                                    <li>3 Social Account </li>
                                                    <li>Branded Reports</li>
                                                </ul>
                                                <div className="pricingtable-footer">
                                                <NavLink to="/about" className="site-button btn-effect">Purchase</NavLink>
                                                </div>
                                                <div className="overlay-main bg-white opacity-07" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Pricing;