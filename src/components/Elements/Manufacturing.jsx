import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import SimilarProjects from './../Elements/SimilarProjects';
import Banner from './../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/5.jpg');

class Manufacturing    extends React.Component {
    
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
                                    <h2 className="text-uppercase sep-line-one " style={{color:'#E81D21'}}><span className="font-weight-300 text-primary">  </span>Manufacturing</h2>
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
                                        {/* <h4 className="font-weight-600">Fueling Growth with Precision and Expertise</h4> */}
                                       
{/* <h4 className="font-weight-600">Engineering Innovation in Car & Industrial Manufacturing</h4> */}
<p style={{textAlign:'justify',textJustify:'inter-word'}}><span style={{color:'#E81D21'}}>Engineering Innovation in Car & Industrial Manufacturing </span>We are shaping the future of mobility and industry through cutting-edge car manufacturing and advanced industrial production solutions. With precision engineering, automation, and a commitment to quality, we deliver excellence in every component and every vehicle.

                                        </p>

                                         <h4 className="font-weight-600">Automobile Manufacturing</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>We design, engineer, and assemble vehicles that are smart, efficient, and built for the road ahead.

                                        </p>
                                         <div className="section-content">
                                            
                                            <div className="m-b0">
                                                         <h4 className="font-weight-600">Our Automotive Capabilities:</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>Vehicle Assembly & Fabrication
                                                    </li>
                                                    <li>Auto Component Manufacturing
                                                    </li>
                                                    <li>R&D and Prototyping
</li>
                                                    <li>EV Solutions (Electric Vehicles)</li>
                                                    <li>Industrial & General Manufacturing</li>
                                                </ol>
                                               
                                            </div>
                                        </div>
                                        <div className="m-b0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s61.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s62.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s63.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                               
                                <h4 className="font-weight-600">Metal Fabrication & CNC Machining</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>High-precision parts for automotive, aerospace, and equipment manufacturers.
                                        </p>
                                <h4 className="font-weight-600"> Plastic Injection Molding</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>High-volume production of plastic components with consistent accuracy.
                                        </p>
                                <h4 className="font-weight-600">Sheet Metal & Tooling Solutions</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Die-making, punching, cutting, and welding services for custom industrial parts.
                                        </p>
                                <h4 className="font-weight-600"> Product Assembly & QA</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>End-to-end mechanical assembly with rigorous quality testing.
                                        </p>


                                        
                                        <div className="section-content">
                                            
                                            <div className="m-b0">
                                                         <h4 className="font-weight-600">Why Choose Us?</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>Skilled engineers & state-of-the-art facilities
                                                    </li>
                                                    <li>CAD/CAM expertise with 3D modeling & prototyping
                                                    </li>
                                                    <li>ISO/TS-certified production standards
</li>
                                                    <li>In-house testing, QA, and delivery teams</li>
                                                    <li>Scalable production for OEMs and enterprise clients</li>
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

export default Manufacturing;