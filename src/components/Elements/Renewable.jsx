import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import SimilarProjects from './../Elements/SimilarProjects';
import Banner from './../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/5.jpg');

class Renewable    extends React.Component {
    
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
                                    <h2 className="text-uppercase sep-line-one " style={{color:'#E81D21'}}><span className="font-weight-300 text-primary">  </span>Renewable Energy</h2>
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
                                       
<h4 className="font-weight-600">Solar Power Systems</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Design, installation, and maintenance of on-grid, off-grid, and hybrid solar energy systems for homes, businesses, and industrial use

                                        </p>

                                         <h4 className="font-weight-600">Wind Energy Solutions</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Wind turbine sourcing, setup, and integration for small and large-scale wind power projects — built for long-term efficiency.

                                        </p>
                                        <div className="m-b0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s51.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s52.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s53.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                               
                                <h4 className="font-weight-600">Energy Storage Systems</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Battery storage and backup power solutions to ensure energy reliability and continuity for both solar and wind systems.
                                        </p>
                                <h4 className="font-weight-600"> PIndustrial & Commercial Projects</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Customized green energy solutions for factories, warehouses, commercial complexes, and government facilities — including net metering and subsidy support.
                                        </p>
                                <h4 className="font-weight-600">Sensor & IoT Integration</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Smart sensor deployment and Internet of Things (IoT) integration for predictive maintenance and data-driven insights.
                                        </p>
                                <h4 className="font-weight-600"> Energy Auditing & Consultation</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Detailed energy audits, system sizing, and ROI analysis to guide your clean energy transition.
                                        </p>


                                        
                                        <div className="section-content">
                                            
                                            <div className="m-b0">
                                                         <h4 className="font-weight-600">Why Choose Us?</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>End-to-end solutions from design to delivery
                                                    </li>
                                                    <li>Certified installers & engineers
                                                    </li>
                                                    <li>Eco-conscious, cost-effective approach
</li>
                                                    <li>Cutting-edge technology & quality components</li>
                                                    <li>Assistance with government subsidies, approvals & documentation</li>
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

export default Renewable;