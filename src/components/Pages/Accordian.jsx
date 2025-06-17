import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/6.jpg');

class Accordian extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Don’t get framed by the competition, trust our solid reputation." pagename="Accordian" bgimage={bnrimg}/>
                   
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
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">With</span> Bg-Dark</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ACCORDIAN  BG DARK */}
                                        <div className="section-content">
                                            <div className="mt-accordion acc-bg-dark" id="accordion9">
                                                <div className="panel mt-panel">
                                                    <div className="acod-head acc-actives">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseOne9" data-parent="#accordion9">
                                                                How long will it take to to design and build my project?
                        <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseOne9" className="acod-body collapse in">
                                                        <div className="acod-content p-tb15"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p></div>
                                                    </div>
                                                </div>
                                                <div className="panel mt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseTwo9" className="collapsed" data-parent="#accordion9">
                                                                Why do I need an Interior Designer?
                        <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseTwo9" className="acod-body collapse">
                                                        <div className="acod-content p-tb15"><p>Inspirational quotes have an amazing ability to Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p></div>
                                                    </div>
                                                </div>
                                                <div className="panel mt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseThree9" className="collapsed" data-parent="#accordion9">
                                                                How much will my interior design project cost?
                        <span className="indicator"><i className="fa fa-plus" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseThree9" className="acod-body collapse">
                                                        <div className="acod-content p-tb15"><p>The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</p></div>
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
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">With</span> Bg-gray</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ACCORDIAN  BACKGROUND GRAY */}
                                        <div className="section-content ">
                                            <div className="mt-accordion acc-bg-gray" id="accordion5">
                                                <div className="panel mt-panel">
                                                    <div className="acod-head acc-actives">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                                How long will it take to to design and build my project?
                        <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseOne5" className="acod-body collapse in">
                                                        <div className="acod-content p-tb15"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p></div>
                                                    </div>
                                                </div>
                                                <div className="panel mt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                                Why do I need an Interior Designer?
                        <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseTwo5" className="acod-body collapse">
                                                        <div className="acod-content p-tb15"><p>Inspirational quotes have an amazing ability to Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p></div>
                                                    </div>
                                                </div>
                                                <div className="panel mt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                                How much will my interior design project cost?
                        <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseThree5" className="acod-body collapse">
                                                        <div className="acod-content p-tb15"><p>The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</p></div>
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
                                                    <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Default</span> Style</h2>
                                                </div>
                                            </div>
                                        </div>
                                        {/* TITLE END */}
                                        {/* ACCORDIAN  DEFAULT */}
                                        <div className="section-content">
                                            <div className="mt-accordion acc-default" id="accordion1">
                                                <div className="panel mt-panel">
                                                    <div className="acod-head acc-actives">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseOne1" data-parent="#accordion1"><i className="fa fa-address-book" />
                        How long will it take to to design and build my project?
                        <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseOne1" className="acod-body collapse in">
                                                        <div className="acod-content p-tb15"><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p></div>
                                                    </div>
                                                </div>
                                                <div className="panel mt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseTwo1" className="collapsed" data-parent="#accordion1"><i className="fa fa-print" />
                        Why do I need an Interior Designer?
                        <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseTwo1" className="acod-body collapse">
                                                        <div className="acod-content p-tb15"><p>Inspirational quotes have an amazing ability to Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p></div>
                                                    </div>
                                                </div>
                                                <div className="panel mt-panel">
                                                    <div className="acod-head">
                                                        <h6 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseThree1" className="collapsed" data-parent="#accordion1"><i className="fa fa-tablet" />
                        How much will my interior design project cost?
                        <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h6>
                                                    </div>
                                                    <div id="collapseThree1" className="acod-body collapse">
                                                        <div className="acod-content p-tb15"><p>The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</p></div>
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

export default Accordian;