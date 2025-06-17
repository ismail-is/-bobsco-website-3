import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import SimilarProjects from './../Elements/SimilarProjects';
import Banner from './../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/5.jpg');

class IndustrialPage    extends React.Component {
    
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
                                    <h2 className="text-uppercase sep-line-one " style={{color:'#E81D21'}}><span className="font-weight-300 text-primary">  </span>Industrial Mechanical & Electrical Works
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
                                       
{/* <h4 className="font-weight-600"> Sand Blasting</h4> */}
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Reliable Solutions for Industrial Efficiency
We offer comprehensive mechanical and electrical services tailored for industrial operations. From equipment installation to preventive maintenance, our team delivers precision, safety, and long-term reliability across all projects.



                                        </p>
 <h4 className="font-weight-600">Our Services</h4>
                                      


                                            <h4 className="font-weight-600">  Mechanical Works

</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>We provide end-to-end mechanical services for industrial facilities, ensuring smooth operations and maximum uptime.
                                        </p>

                                        <div className="m-b0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/Mechanical1.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/Mechanical2.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/Mechanical3.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
  <div className="m-b0">
                                                         <h4 className="font-weight-600">Our expertise includes</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>Installation of industrial machinery & pipelines


                                                    </li>
                                                    <li>Fabrication & welding services</li>
                                                    <li>Pipelines & Storage Tanks

</li>
                                                    <li>HVAC system installation & maintenance</li>
                                                    <li>Plant shutdown & turnaround support</li>
                                                    <li>Preventive and corrective mechanical maintenance</li>
                                                </ol>
                                               
                                            </div>

                               
                                <h4 className="font-weight-600"> Electrical Works

</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>We handle low and high-voltage electrical installations with a focus on efficiency and safety.


                                        </p>
<div className="m-b0">
                                                         <h4 className="font-weight-600">Our electrical services cover:</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>Industrial wiring & cabling

                                                    </li>
                                                    <li>Control panel installation & automation support


                                                    </li>
                                                    <li>
Transformer and switchgear setup


</li>
                                                    <li>Lighting systems & power distribution

</li>
                                                    <li>Electrical system maintenance & troubleshooting

</li>
                                                </ol>
                                               
                                            </div>
                                            <div className="m-b0">
                                                         <h4 className="font-weight-600">Why Choose Us?</h4>
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li> Qualified Engineers & Technicians


                                                    </li>
                                                    <li>End-to-End Industrial Solutions


                                                    </li>
                                                    <li>Adherence to Safety & Compliance Standards


</li>
                                                    <li> On-time Project Delivery

</li>
                                                    <li>  Affordable and Transparent Pricing

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

export default IndustrialPage;