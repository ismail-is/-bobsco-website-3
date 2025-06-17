import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import SimilarProjects from './../Elements/SimilarProjects';
import Banner from './../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/5.jpg');

class Oil  extends React.Component {
    
    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="page-content">
                {/* <Banner title="Helping you and your house become better acquainted." pagename="Project Detail" bgimage={bnrimg}/> */}
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left" style={{display:'flex',justifyContent:'center'}}>
                                <div className="mt-separator" >
                                    <h2 className="text-uppercase sep-line-one " style={{color:'#E81D21'}}><span className="font-weight-300 text-primary">  </span>Oil & Gas Energy Services</h2>
                                </div>
                            </div>
                        </div>
                            <div className="project-detail-outer">
                              
                                <div className="m-b30">
                                    <div className="row">
                                        {/* <div className="col-md-4">
                                            <div className="product-block">
                                                <div className="row">
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Date</h4>
                                                        <p>April 10, 2022</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Studio Massimo, Italy</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Project type</h4>
                                                        <p>Contruction, Brading</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Location</h4>
                                                        <p>Mountain View CA 94043</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Year</h4>
                                                        <p>2022</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        {/* <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img src="http://i3.ytimg.com/vi/s3A7AK1K2hc/maxresdefault.jpg" alt="" />
                                                    <button type="button" className="play-now" data-toggle="modal" data-target="#myModal3">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="project-detail-containt">
                                    <div className="bg-white text-black">
                                        <h4 className="font-weight-600">Fueling Growth with Precision and Expertise</h4>
                                        <p style={{textAlign:'justify',textJustify:'inter-word'}}>We offer specialized design and support services for the Oil & Gas and Energy sector, combining engineering accuracy with industry compliance. From upstream to downstream, we help energy companies design, plan, and optimize their infrastructure and assets with high standards of safety and efficiency.
                                        </p>
<h4 className="font-weight-600">Engineering Design & Drafting</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Piping layouts, equipment modeling, skid designs, and facility drawings using advanced CAD tools.

                                        </p>

                                         <h4 className="font-weight-600"> Process Engineering Support</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>P&IDs, process flow diagrams (PFDs), instrumentation layouts, and system design documentation.
                                        </p>
                                        <div className="m-b0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s21.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s22.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s23.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                               
                                <h4 className="font-weight-600">Pipeline & Facility Layouts</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Design of onshore/offshore pipelines, storage tanks, pump stations, and terminal facilities.
                                        </p>
                                <h4 className="font-weight-600"> Structural & Mechanical Design</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Support structures, pressure vessels, and mechanical system design complying with international standards.
                                        </p>
                                <h4 className="font-weight-600">Safety & Compliance Design</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>HAZOP support, fire protection layout, ESD systems, and zone classification drawings
                                        </p>

                                        
                                        <div className="section-content">
                                            
                                            <div className="m-b0">
                                                         <h4 className="font-weight-600"> Why BOBSCO for Energy Projects?</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>Industry-compliant solutions (ASME, API, IEC, ISO)
                                                    </li>
                                                    <li>Engineers with Oil & Gas field experience
                                                    </li>
                                                    <li>Fast turnaround for design updates & revisions</li>
                                                    <li>Seamless integration with client teams & EPC contractors</li>
                                                    <li>Support for offshore and remote collaboration projects</li>
                                                </ol>
                                               
                                            </div>
                                        </div>
                                        <div className="m-b0">
                                            <div className="mt-divider divider-1px  bg-black"><i className="icon-dot c-square" /></div>
                                        </div>
                                        {/* <ul className="social-icons social-square social-darkest m-b0">
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                            <li><NavLink to={"#"} className="fa fa-youtube" /></li>
                                            <li><NavLink to={"#"} className="fa fa-instagram" /></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                    {/* <SimilarProjects/> */}
                </div>
{/* 
                <div className="modal fade" id="myModal3" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://www.youtube.com/watch?v=s3A7AK1K2hc' />
                        </div>
                    </div>
                </div> */}

                {/* <Footer /> */}
            </>
        );
    };
};

export default Oil ;