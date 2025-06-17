import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/6.jpg');

class Table extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Making your vision come true, that is what we do." pagename="table" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <ShortcodesNav />
                                <div className="col-md-9 col-sm-8">
                                    <div className="section-content m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Table </span> Responsive</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* TABLE RESPONSIVE */}
                                        <div id="no-more-tables">
                                            <table className=" table-striped table-condensed cf mt-responsive-table">
                                                <thead className="cf">
                                                    <tr>
                                                        <th>Code</th>
                                                        <th>Company</th>
                                                        <th className="numeric">Price</th>
                                                        <th className="numeric">Change</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td data-title="Code">Code-1</td>
                                                        <td data-title="Company">Alfreds Futterkiste</td>
                                                        <td data-title="Price" className="numeric">$1.38</td>
                                                        <td data-title="Change" className="numeric">-0.01</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-title="Code">Code-2</td>
                                                        <td data-title="Company">Alimentari Riuniti</td>
                                                        <td data-title="Price" className="numeric">$1.15</td>
                                                        <td data-title="Change" className="numeric">+0.02</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-title="Code">Code-3</td>
                                                        <td data-title="Company">Ernst Handel</td>
                                                        <td data-title="Price" className="numeric">$4.00</td>
                                                        <td data-title="Change" className="numeric">-0.04</td>
                                                    </tr>
                                                    <tr>
                                                        <td data-title="Code">Code-4</td>
                                                        <td data-title="Company">Magazzini Alimentari</td>
                                                        <td data-title="Price" className="numeric">$3.00</td>
                                                        <td data-title="Change" className="numeric">+0.06</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* TABLE CONDENSED */}
                                    <div className="section-content m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Bordered </span> Style</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Company</th>
                                                    <th>Contact</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Alfreds Futterkiste</td>
                                                    <td>Centro comercial</td>
                                                    <td>Futterkiste@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Alimentari Riuniti</td>
                                                    <td>Moe</td>
                                                    <td>Riuniti@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Ernst Handel</td>
                                                    <td>Island Trading</td>
                                                    <td>Handel@example.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* TABLE CONTEXTUAL CLASSES */}
                                    <div className="section-content m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Hover </span> Style</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Company</th>
                                                    <th>Contact</th>
                                                    <th>Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Alfreds Futterkiste</td>
                                                    <td>Centro comercial</td>
                                                    <td>Alfreds@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Alimentari Riuniti</td>
                                                    <td>Moe</td>
                                                    <td>Riuniti@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Ernst Handel</td>
                                                    <td>Island Trading</td>
                                                    <td>Handel@example.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* TABLE CONDENSED */}
                                    <div className="section-content m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Basic </span> Style</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Company</th>
                                                    <th>Contact</th>
                                                    <th>Country</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Alfreds Futterkiste</td>
                                                    <td>Centro comercial</td>
                                                    <td>Alfreds@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Alimentari Riuniti</td>
                                                    <td>Moe</td>
                                                    <td>Riuniti@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Ernst Handel</td>
                                                    <td>Island Trading</td>
                                                    <td>Ernst@example.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* TABLE CONTEXTUAL CLASSES */}
                                    <div className="section-content m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Striped</span> Rows</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Company</th>
                                                    <th>Contact</th>
                                                    <th>Country</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Alfreds Futterkiste</td>
                                                    <td>Centro comercial</td>
                                                    <td>Alfreds@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Alimentari Riuniti</td>
                                                    <td>Moe</td>
                                                    <td>Riuniti@example.com</td>
                                                </tr>
                                                <tr>
                                                    <td>Ernst Handel</td>
                                                    <td>Island Trading</td>
                                                    <td>Ernst@example.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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

export default Table;