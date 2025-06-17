import React from 'react';
import { NavLink } from 'react-router-dom';

class AboutCompany extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 bg-white">
                    <div className="container">
                        <div className="section-content ">
                            <div className="m-service-containt text-black">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="service-about-left">
                                            <div className="mt-media">
                                                <img src={require('./../../images/All manpower img/service.png')} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className="service-about-right m-b30">
                                            {/* <h3 className="m-t0" id="whytargefy" > <span style={{color:"#F7C200"}} > 24x7 </span>FOR BETTER<span style={{color:"#E81D21"}}> CLIENT SATISFACTION</span>  */}
                                            {/* <h3 className="font-weight-800" id="whytargefy" style={{textAlign:'center'}}> <span style={{color:"#F7C200"}} > 24x7 </span>FOR BETTER <br/><span  style={{ color: '#E81D21' }}>CLIENT SATISFACTION</span> </h3>     */}
                                            <h3 className="font-weight-800" id="whytargefy" style={{textAlign:'center'}}> <span style={{color:"#F7C200"}} > Client  </span>Success    <br/><span  style={{ color: '#E81D21' }}>Is Our Priority</span> </h3>
                                            {/* </h3> */}
                                            <p >Manpower is the backbone of industries. In this new era of Industrial Growth, all the industries have to maintain a regular pace so that they can walk to foot to foot with the world. We provide best possible Manpower Services like staffing solutions, industrial labour and security services and industrial material supplier services at an industry competitive price range</p>
                                            {/* <div className="call-for-quote-outer">
                                                <div className="call-quote">
                                                    <span>Call For a Quote:</span>
                                                    <h4>(321) 456 6789</h4>
                                                </div>
                                                <div className="call-estimate bg-dark">
                                                <NavLink to={"#"} className="site-button-secondry btn-effect">Online Estimate Form</NavLink>
                                                </div>
                                            </div> */}
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

export default AboutCompany;