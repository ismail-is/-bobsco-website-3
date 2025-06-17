import React from 'react';
import { NavLink } from 'react-router-dom';

class Faq extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Some</span> FAQ</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    <div className="section-content p-b30">
                                        <div className="mt-accordion acc-bg-gray" id="accordion5">
                                            <div className="panel mt-panel">
                                                <div className="acod-head acc-actives">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                            Choose between rates or instant payment
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseOne5" className="acod-body collapse in">
                                                    <div className="acod-content p-tb15"><p> Motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est.
                          Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci consectetur vel posuere posuere, rutrum eu ipsum. Cost is important.</p></div>
                                                </div>
                                            </div>
                                            <div className="panel mt-panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                            Come to see a live preview
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-tb15">Inspirational quotes have an amazing ability to motivate others and change the way we feel about ourselves. This is why I find them so interesting and crucial on our paths to success.</div>
                                                </div>
                                            </div>
                                            <div className="panel mt-panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                            Choose the correct service
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseThree5" className="acod-body collapse">
                                                    <div className="acod-content p-tb15">The leap into electronic typesetting, remaining essentially unchanged. It was popularised sheets containing Lorem Ipsum passagese.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Solution</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-gray center">
                                                <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                    <span className="icon-cell text-primary"><i className="flaticon-sketch" /></span>
                                                </div>
                                                <div className="icon-content text-black">
                                                    <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">Assistance</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and setting as Planning.</p>
                                                    <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-dark center">
                                                <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                    <span className="icon-cell text-primary"><i className="flaticon-ui" /></span>
                                                </div>
                                                <div className="icon-content text-white">
                                                    <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">Financing</h4>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and setting as Planning.</p>
                                                    <NavLink to="/about" className="site-button-link yellow" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FAQ */}
                </div>
            </>
        );
    }
};

export default Faq;