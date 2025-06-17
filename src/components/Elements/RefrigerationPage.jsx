import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import SimilarProjects from './../Elements/SimilarProjects';
import Banner from './../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/5.jpg');

class RefrigerationPage    extends React.Component {
    
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
                                    <h2 className="text-uppercase sep-line-one " style={{color:'#E81D21'}}><span className="font-weight-300 text-primary">  </span>Refrigeration Services
</h2>
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
                                       
<h4 className="font-weight-600"> Reliable Cooling Solutions for Every Industry</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>We specialize in providing high-performance refrigeration services for commercial, industrial, and cold storage applications. From system installation to maintenance and repair, our solutions ensure maximum efficiency, energy savings, and temperature control.



                                        </p>
<h4 className="font-weight-600"> Our Refrigeration Services</h4>
<h4 className="font-weight-600"> Refrigeration System Installation</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>We design and install customized refrigeration systems based on your business needs — whether it’s a cold storage unit, commercial freezer, or industrial chiller.




                                        </p>

                                          <div className="m-b0">
                                                         <h4 className="font-weight-600">We serve:</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>Cold Storage Facilities

                                                    </li>
                                                    <li> Supermarkets & Retail Chains

                                                    </li>
                                                    <li>Restaurants & Food Processing Units


</li>
<li>Industrial Warehouses
</li>
                                                  
                                                </ol>
                                               
                                            </div>


                                            <h4 className="font-weight-600">  Maintenance & Repair

</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Our trained technicians provide preventive maintenance and emergency repairs to keep your systems running efficiently and reduce downtime.




                                        </p>

                                        <div className="m-b0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/Refrigeration1.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/Refrigeration2.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/Refrigeration3.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
  <div className="m-b0">
                                                         <h4 className="font-weight-600">Services include:
</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>Compressor repair & replacement


                                                    </li>
                                                    <li>Refrigerant leak detection


                                                    </li>
                                                    <li>Thermostat calibration


</li>
                                                    <li>Periodic performance checks
</li>
                                                </ol>
                                               
                                            </div>

                               
                                <h4 className="font-weight-600"> Refrigeration System Upgrades

</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Upgrade outdated or energy-consuming systems with modern, eco-friendly alternatives. We help optimize your setup to meet new standards and improve cost-efficiency.



                                        </p>
<div className="m-b0">
                                                         <h4 className="font-weight-600">Why Choose Us?</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>Industry-Compliant Installation

                                                    </li>
                                                    <li> Energy-Efficient Cooling Solutions


                                                    </li>
                                                    <li>24/7 Emergency Support


</li>
                                                    <li>AMC (Annual Maintenance Contracts) Available

</li>
                                                    <li>Trained Technicians & Quality Assured Service

</li>
                                                </ol>
                                               
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

export default RefrigerationPage;