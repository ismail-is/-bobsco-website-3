import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-6.png');

class Specialization3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50  mobile-page-padding" style={{backgroundImage:"url(" + bnr1 + ")",backgroundColor:'#000000'}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            {/* <div className="section-head m-b50 text-white text-center">
                                <h3 className="m-t0">We are all constructed out of our self dialogue.</h3>
                                <p>Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperadipiscing elit, sed diam nonummy
              nibh suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            </div> */}
                            <div className="section-full p-t10 p-b10 inner-page-padding" >
                        <div className="container" >
                            <div className="faq-1 bg-gray  p-a50" style={{borderRadius:'30px'}}> 
                                {/* TITLE START */}
                                <div className="section-head" >
                                    <div className="mt-separator-outer separator-center" >
                                        <div className="mt-separator">
                                            <h2 className="text-uppercase sep-line-one ">Who  <span style={{color:'#E81D21'}}>we are</span> </h2>
                                        </div>
                                    </div>
                                    <p>We are a team of seasoned engineering professionals with decades of hands-on experience in oil &
gas, petrochemical, and specialty chemical industries. Our experts bring global exposure and a deep
understanding of international codes and standards. Backed by collaboration with international
colleagues, </p>
                                </div>
                                {/* TITLE END */}
                                {/* Accordian */}
                                <div className="mt-accordion acc-bg-white" id="accordion5">
                                    <div className="panel mt-panel">
                                        <div className="acod-head acc-actives">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                Expertise & Experience
                  <span className="indicator"><i className="fa fa-plus" style={{color:"#E81D21"}} /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne5" className="acod-body collapse in">
                                            <div className="acod-content p-tb15">
                                            <li>Consulting and value engineering excellence  </li>
                                            <li>Expertise across project life cycles</li>
                                            <li>Proven track record in delivering practical, cost-effective solutions</li>
              </div>
                                        </div>
                                    </div>
                                    <h5 className="font-weight-600">What We Do </h5>
                                    <p>As Owner’s Engineers and Consultants, our core offering is the independent review of engineering
deliverables and project documentation. We support both onshore and offshore facilities by
providing expert insights that enhance design integrity, ensure compliance, and optimize
performance. Our involvement spans key project stages, with a strong focus on safety, operability,
and technical assurance throughout the asset lifecycle.</p>

<div className="panel mt-panel">
                                        <div className="acod-head acc-actives">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseOne4" data-parent="#accordion4">
                                                Expertise & Experience
                  <span className="indicator"><i className="fa fa-plus" style={{color:"#E81D21"}} /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne4" className="acod-body collapse in">
                                            <div className="acod-content p-tb15">
                                            <li>On-site and remote engineering support </li>
                                            <li>Commissioning and start-up assistance, including SOP review and optimizaƟon</li>
                                            <li>Customized, value-driven engineering solutions tailored to operational needs</li>
              </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>



                            {/* <div className="row">
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/1.jpg')}  alt=""/>
                                        <div className="figcaption">
                                            <h4>Concept and Design</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/2.jpg')} alt="" />
                                        <div className="figcaption">
                                            <h4>Refurbishment</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/3.jpg')} alt=""/>
                                        <div className="figcaption bg-dark">
                                            <h4>General Builder</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization3;