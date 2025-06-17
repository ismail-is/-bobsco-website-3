import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/5.jpg');

class Tabs extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="When it comes to your house, don’t mess with the rest, trust the best." pagename="Tabs" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <ShortcodesNav />
                                <div className="col-md-9 col-sm-8">
                                    <div className="section-content">
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">background</span> Tabs</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            {/* TABS DEFAULT NAV LEFT */}
                                            <div className="mt-tabs vertical bg-tabs">
                                                <ul className="nav nav-tabs">
                                                    <li className="active"><a data-toggle="tab" href="#web-design-15">Home</a></li>
                                                    <li><a data-toggle="tab" href="#graphic-design-15">Profile</a></li>
                                                    <li><a data-toggle="tab" href="#developement-15">Massages</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div id="web-design-15" className="tab-pane active">
                                                        <p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                                                    </div>
                                                    <div id="graphic-design-15" className="tab-pane">
                                                        <p className="m-b0">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                    </div>
                                                    <div id="developement-15" className="tab-pane">
                                                        <p className="m-b0">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Tabs left with</span> background</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            {/* TAB DEFAULT WITH NAV BG */}
                                            <div className="section-content">
                                                <div className="mt-tabs bg-tabs">
                                                    <ul className="nav nav-tabs">
                                                        <li className="active"><a data-toggle="tab" href="#web-design-13">Home</a></li>
                                                        <li><a data-toggle="tab" href="#graphic-design-13">Profile</a></li>
                                                        <li><a data-toggle="tab" href="#developement-13">Massages</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div id="web-design-13" className="tab-pane active">
                                                            <p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                                                        </div>
                                                        <div id="graphic-design-13" className="tab-pane">
                                                            <p className="m-b0">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                        </div>
                                                        <div id="developement-13" className="tab-pane">
                                                            <p className="m-b0">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Default</span> Tabs</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            {/* TAB DEFAULT */}
                                            <div className="section-content">
                                                <div className="mt-tabs tabs-default">
                                                    <ul className="nav nav-tabs">
                                                        <li className="active"><a data-toggle="tab" href="#web-design-1">Home</a></li>
                                                        <li><a data-toggle="tab" href="#graphic-design-1">Profile</a></li>
                                                        <li><a data-toggle="tab" href="#developement-1">Massages</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div id="web-design-1" className="tab-pane active">
                                                            <p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                                                        </div>
                                                        <div id="graphic-design-1" className="tab-pane">
                                                            <p className="m-b0">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                        </div>
                                                        <div id="developement-1" className="tab-pane">
                                                            <p className="m-b0">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-b0">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Tabs Defaul</span> nav left</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            {/* TAB DEFAULT */}
                                            <div className="mt-tabs vertical tabs-default">
                                                <ul className="nav nav-tabs">
                                                    <li className="active"><a data-toggle="tab" href="#web-design-3">Home</a></li>
                                                    <li><a data-toggle="tab" href="#graphic-design-3">Profile</a></li>
                                                    <li><a data-toggle="tab" href="#developement-3">Massages</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div id="web-design-3" className="tab-pane active">
                                                        <p className="m-b0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                                                    </div>
                                                    <div id="graphic-design-3" className="tab-pane">
                                                        <p className="m-b0">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                    </div>
                                                    <div id="developement-3" className="tab-pane">
                                                        <p className="m-b0">But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default Tabs;