import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/4.jpg');

class Faq extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                <Banner title="Frequently Asked Questions" pagename="FAQ" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-t80 p-b80 inner-page-padding">
                        <div className="container">
                            <div className="faq-1 bg-gray  p-a50">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="mt-separator-outer separator-center">
                                        <div className="mt-separator">
                                            <h2 className="text-uppercase sep-line-one ">FAQ</h2>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                {/* Accordian */}
                                <div className="mt-accordion acc-bg-white" id="accordion5">
                                    <div className="panel mt-panel">
                                        <div className="acod-head acc-actives">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                    How do we work?
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne5" className="acod-body collapse in">
                                            <div className="acod-content p-tb15">
                                            <p> Progressively generate synergistic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building e-tailers without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                    What services do we offer?
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>Graphic design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</p></div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                    Why do you have a design fee and purchasing fee on the product?
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>Developement lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</p></div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseFour5" className="collapsed" data-parent="#accordion5">
                                                    How long will it take to to design and build my project?
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>Web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</p></div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseFive5" className="collapsed" data-parent="#accordion5">
                                                    What should I have at our first meeting for my project?
                  <span className="indicator"><i className="fa fa-plus" /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFive5" className="acod-body collapse">
                                            <div className="acod-content p-tb15">
                                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.web design lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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

export default Faq;