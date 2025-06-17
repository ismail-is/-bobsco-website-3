import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/2.jpg');

class ListGroup extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="For your roofing and siding, quality we’ll be providing!" pagename="List Group" bgimage={bnrimg}/>
                   
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
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">List</span> Unordered</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* LISTING WITH NUMBERING & ALPHA */}
                                        <div className="section-content">
                                            <ul className="list-simple p-l15">
                                                <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.
                  <ul>
                                                        <li>Listen better. Plan better. Build better.</li>
                                                        <li>Listen better. Plan better. Build better.</li>
                                                    </ul>
                                                </li>
                                                <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">List</span> Unstyled</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* LISTING WITH NUMBERING & ALPHA */}
                                        <div className="section-content">
                                            <ul className="list-unstyled list-simple">
                                                <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.
                  <ul>
                                                        <li>Listen better. Plan better. Build better.</li>
                                                        <li>Listen better. Plan better. Build better.</li>
                                                    </ul>
                                                </li>
                                                <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="m-b50">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">List</span> Ordered</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* LISTING WITH NUMBERING & ALPHA */}
                                        <div className="section-content">
                                            <div className="m-b50">
                                                <ol type={1} className="m-l15 list-simple">
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                </ol>
                                                <ol type="A" className="m-l15 list-simple">
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                    <li>Aorem ipsum dolor sit amet</li>
                                                </ol>
                                            </div>
                                            <div className="m-b50">
                                                <ol type="i" className="m-l15 list-simple">
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                    <li>Aorem ipsum dolor sit amet</li>
                                                </ol>
                                                <ol type="I" className="m-l15 list-simple">
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                    <li>Aorem ipsum dolor sit amet</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-b0">
                                        {/* TITLE START */}
                                        <div className="section-head">
                                            <div className="mt-separator-outer separator-left">
                                                <div className="mt-separator">
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">List</span> Numbering &amp; Alfha</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* LISTING WITH NUMBERING & ALPHA */}
                                        <div className="section-content">
                                            <div className="m-b50">
                                                <ol className="list-num-count upper-alpha list-outline-none">
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                </ol>
                                                <ol className="list-num-count upper-alpha list-outline">
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                </ol>
                                            </div>
                                            <div className="m-b0">
                                                <ol className="list-num-count">
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                </ol>
                                                <ol className="list-num-count lower-alpha">
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                    <li>Creating a sustainable future through building preservation, green architecture, and smart design.Creating quality urban lifestyles.</li>
                                                </ol>
                                            </div>
                                        </div>
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

export default ListGroup;