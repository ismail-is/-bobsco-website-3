import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import SimilarProjects from './../Elements/SimilarProjects';
import Banner from './../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/5.jpg');

class Engineering  extends React.Component {
    
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
                                    <h2 className="text-uppercase sep-line-one " style={{color:'#E81D21'}}><span className="font-weight-300 text-primary">  </span> Engineering Design Services</h2>
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
                                        <h4 className="font-weight-600">Innovative. Accurate. Built for Performance.</h4>
                                        <p style={{textAlign:'justify',textJustify:'inter-word'}}>At BOBSCO. we provide end-to-end Engineering Design Services tailored for infrastructure, construction, industrial, and architectural projects. Our designs balance creativity with functionality, ensuring precision, compliance, and sustainability.
                                        </p>
<h4 className="font-weight-600">Our Core Engineering Design Services Include:
Structural Design</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Safe, efficient, and cost-effective structures for residential, commercial, and industrial use.
                                        </p>

                                         <h4 className="font-weight-600">MEP (Mechanical, Electrical & Plumbing) Design</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Integrated system design to optimize performance, energy use, and safety.
                                        </p>
                                        <div className="m-b0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s1.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s2.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/all bobsco/service/s3.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                               
                                <h4 className="font-weight-600">Architectural Drafting & Detailing</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>High-quality CAD drafting, 3D modeling, and detail drawings for approvals and execution.
                                        </p>
                                <h4 className="font-weight-600">Product & Mechanical Component Design</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>2D/3D modeling, reverse engineering, and prototyping for mechanical systems and equipment.
                                        </p>
                                <h4 className="font-weight-600">Infrastructure & Civil Design</h4>
<p style={{textAlign:'justify',textJustify:'inter-word'}}>Roads, drainage, foundations, and site layouts with engineering precision.
                                        </p>

                                        <h4 className="font-weight-600">Why Choose Us?</h4>
                                        <p style={{textAlign:'justify',textJustify:'inter-word'}}>Expert design team with real-world execution knowledge
 Software expertise in AutoCAD, Revit, SolidWorks, and more
Strict quality control & compliance with standards (IS/ASME/BS etc.)
Timely delivery and revision support
Suitable for contractors, consultants, developers & startups
                                        </p>
                                        {/* <div className="section-content">
                                            
                                            <div className="m-b0">
                                                <ol className="list-num-count" style={{textAlign:'justify',textJustify:'inter-word'}}>
                                                    <li>The application of the safety Rules and Regulations, General Instruction, Codes and Procedures as set by the Client. Constant adherence to safe operating procedures and practices so as to ensure effective control against accidents and illnesses. 
                                                    </li>
                                                    <li>Providing an adequate and safe place to accommodate our personnel on site with portable water, first aid facilities and proper sanitation. 
                                                    </li>
                                                    <li>To educate all personnel on safety methods, procedures, using personnel protective equipment, and existing restrictions prevailing on site. Conduct ten-minute safety discussions, organized and implemented by each crew supervisor every working day, Minutes of the meeting will be forwarded to Client Representative.</li>
                                                </ol>
                                               
                                            </div>
                                        </div> */}
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

export default Engineering ;