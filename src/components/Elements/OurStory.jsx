import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/background/bg-6.png');
var img2 = require('./../../images/background/line.png');

class OurStory extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        {/* <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">About</span> Summary</h2>
                                </div>
                            </div>
                        </div> */}
                        {/* TITLE END */}
                        <div className="section-content our-story">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic" >
                                            <img src={require('./../../images/All manpower img/ser1.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2011-12</h4> */}
                                        <h4 className="m-b20" style={{fontSize:'30px',color:'#E81D21'}}>Manpower Supply                                  </h4>
                                        <p>We have a variety of available qualified and skilled manpower to support the upcoming projects in KSA as well as the running industry and Shutdowns/Turn Around on very competitive and flexible terms. We deal with following manpower category:
                                        </p>
                                    
                                        {/* <p className='whytargefy'>
    • QA/QC Mechanical &nbsp;&nbsp; • QA/QC Civil &nbsp;&nbsp; • QA/QC Electrical &nbsp;&nbsp; • Helper/Labor (Skilled & Semi-Skilled) &nbsp;&nbsp; 
    • Carpenter Shuttering &nbsp;&nbsp; • Carpenter Finishing &nbsp;&nbsp; • Gypsum (Carpenter) &nbsp;&nbsp; • Steel Fixer &nbsp;&nbsp; 
    • Steel Fabricator &nbsp;&nbsp; • Mason (Block/Plaster) &nbsp;&nbsp; • Tile Fixer &nbsp;&nbsp; • Marble Tiles &nbsp;&nbsp; 
    • Painter Roller &nbsp;&nbsp; • Painter (Spray) &nbsp;&nbsp; • Scaffolding Glass Fixer &nbsp;&nbsp; • Insulator Electrical (Normal) &nbsp;&nbsp; 
    • Electrical (Industrial) &nbsp;&nbsp; • Duct Fitter &nbsp;&nbsp; • Duct Fabricator &nbsp;&nbsp; • Aluminum (Fabricator) &nbsp;&nbsp; 
    • Plumber &nbsp;• Pipe Fitter &nbsp;&nbsp; • Pipe Fabricator &nbsp;&nbsp; • Forklift Operator &nbsp;&nbsp; 
    • A/C Mechanic &nbsp;&nbsp; • Rigger &nbsp;&nbsp; • Erector &nbsp;&nbsp; • Welder (Normal) &nbsp;&nbsp; • Welder (Mig) &nbsp;&nbsp; 
    • Welder (3G-4G) &nbsp;&nbsp; • Welder (6G) &nbsp;&nbsp; • Welder (Tig) &nbsp;&nbsp; • Secretary &nbsp;&nbsp; 
    • Foreman (Civil Mech) &nbsp;&nbsp; • Instrument Fitter &nbsp;&nbsp; • Tea Boy &nbsp;&nbsp; • Store Keeper &nbsp;&nbsp; 
    • Firefighting Tech. etc...
</p> */}
<div className='whytargefy'>
    <a href="#" style={{color:"white"}} >Planning Engineers</a> • 
    <a href="#"style={{color:"white"}}>QA/QC Mechanical</a> • 
    <a href="#"style={{color:"white"}}>QA/QC Civil</a> • 
    <a href="#" style={{color:"white"}}>QA/QC Electrical</a> • 
    <a href="#" style={{color:"white"}}>Helper/Labor (Skilled & Semi Skilled)</a> • 
    <a href="#" style={{color:"white"}}>Carpenter Shuttering</a> • 
    <a href="#" style={{color:"white"}}>Carpenter Finishing</a> • 
    <a href="#" style={{color:"white"}}>Gypsum (Carpenter)</a> • 
    <a href="#" style={{color:"white"}}>Steel Fixer</a> • 
    <a href="#" style={{color:"white"}}>Steel Fabricator</a> • 
    <a href="#" style={{color:"white"}}>Mason (Block/Plaster)</a> • 
    <a href="#" style={{color:"white"}}>Tile Fixer</a> • 
    <a href="#" style={{color:"white"}}>Marble Tiles</a> • 
    <a href="#" style={{color:"white"}}>Painter Roller</a> • 
    <a href="#" style={{color:"white"}}>Painter (Spray)</a> • 
    <a href="#" style={{color:"white"}}>Scaffolding Glass Fixer</a> • 
    <a href="#" style={{color:"white"}}>Insulator Electrical (Normal)</a> • 
    <a href="#" style={{color:"white"}}>Electrical (Industrial)</a> • 
    <a href="#" style={{color:"white"}}>Duct Fitter</a> • 
    <a href="#" style={{color:"white"}}>Duct Fabricator</a> • 
    <a href="#" style={{color:"white"}}>Aluminum (Fabricator)</a> • 
    <a href="#" style={{color:"white"}}>Plumber</a> • 
    <a href="#" style={{color:"white"}}>Pipe Fitter</a> • 
    <a href="#" style={{color:"white"}}>Pipe Fabricator</a> • 
    <a href="#" style={{color:"white"}}>Forklift Operator</a> • 
    <a href="#" style={{color:"white"}}>A/C Mechanic</a> • 
    <a href="#" style={{color:"white"}}>Rigger</a> • 
    <a href="#" style={{color:"white"}}>Erector</a> • 
    <a href="#" style={{color:"white"}}>Welder (Normal)</a> • 
    <a href="#" style={{color:"white"}}>Welder (Mig)</a> • 
    <a href="#" style={{color:"white"}}>Welder (3G-4G)</a> • 
    <a href="#" style={{color:"white"}}>Welder (6G)</a> • 
    <a href="#" style={{color:"white"}}>Welder (Tig)</a> • 
    <a href="#" style={{color:"white"}}>Secretary</a> • 
    <a href="#" style={{color:"white"}}>Foreman (Civil Mech)</a> • 
    <a href="#" style={{color:"white"}}>Instrument Fitter</a> • 
    <a href="#" style={{color:"white"}}>Tea Boy</a> • 
    <a href="#" style={{color:"white"}}>Store Keeper</a> • 
    <a href="#" style={{color:"white"}}>Firefighting Tech.</a> etc...
</div>

                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/All manpower img/Civi lWorks  - Services Page.webp')} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2013-14</h4> */}
                                        <h4 className="m-b20" style={{fontSize:'30px',color:'#E81D21'}}>Civil Works     </h4>
                                        <p>your trusted partner in delivering high-quality civil work services</p>
                                        <p className='whytargefy'>1. Site Preparation
Before construction begins, proper site preparation is crucial. 
Land Clearing, Excavation, Erosion Control.
</p>
<p className='whytargefy'>2. Earthworks
Our earthworks services ensure the groundwork for your project is solid and dependable:
Excavation and Grading, Trenching, Backfilling.
</p>
<p className='whytargefy'>3. Foundations
A strong foundation is key to any construction project. We specialize in:
Footings and Foundations, Retaining Walls, Foundation Repair.
</p>
<p className='whytargefy'>4. Roadwork and Pavement
Our roadwork and pavement services include: Road Construction, Paving,  Road Repair
</p>
<p className='whytargefy'>5. Drainage Systems
Effective drainage is essential for protecting your property. We offer:
Stormwater Management, Drainage Installation, Maintenance.
</p>
<p className='whytargefy'>6. Utility Installation
We provide comprehensive utility installation services, including:
Water and Sewer Lines, Electrical Trenches, Gas Lines.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/All manpower img/ser3.jpg')} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2015-16</h4> */}
                                        <h4 className="m-b20" style={{fontSize:'30px',color:'#E81D21'}}>Equipment Rental
                                        </h4>
                                        <p className='whytargefy'>We are willing to provide services of our equipments, directly under clients control on hourly, weekly and monthly rates basis. Our Supervisory staff are well experienced and are familiar with Modern Industrial Technical Standards and Safety Regulations. BUS, COASTER, HIACE, PICKUP, AMBULANCE, DIESEL TANKER, WATER TANKER, BOOM TRUCK, TRAILER, DUMP TRUCK, CRANE, FORK LIFT, MANLIFT, WHEEL LOADER, EXCAVATOR, GENERATOR, AIR COMPRESSOR, WELDING MACHINE, TOWER LIGHT & OTHER EQUIP.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/All manpower img/ser4.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        {/* <h4 className="text-uppercase m-b20">2017-18</h4> */}
                                        <h4 className="m-b20" style={{fontSize:'30px',color:'#E81D21'}}>Material Supply
                                        </h4>
                                        <p className='whytargefy'>Our Company is involved in supply of Industrial items all over the kingdom from various manufactures and brands around the world. We represent many well-known international manufacturers and suppliers of Industrial Materials. Some of them include Jotun Paints, Eyewex Safety Items, SGN Abrasives, PMS Safety Harness & Slingsete We are blessed with a huge resource to fulfill the need of each and every customer approaching us. We can offer a complete procurement and supply service for a wide range of industrial materials such as Pipefittings, Valves, Hoses, Paints, Abrasives, Tools, Safety Items, Welding Products, Building Materials etc.</p>
                                    </div>
                                </div>
                            </div>

                        
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/All manpower img/Scaffolding - Services Page.webp')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="m-b20" style={{fontSize:'30px',color:'#E81D21'}}>Scaffolding</h4>
                                        <p className='whytargefy'>1.
                                        Scaffolding services involve the design, erection, maintenance, and dismantling of temporary structures used to support workers and materials during the construction, repair, or maintenance of buildings, bridges, and other large structures. These services are crucial for ensuring safety and efficiency on construction sites, providing access to hard-to-reach areas</p>
                                       <p  className='whytargefy'>2. Assembling the scaffolding structure on-site, ensuring stability and safety.
                                       </p> 
                                       <p  className='whytargefy'>3. Providing expert advice on scaffolding selection and best practices.
                                       </p> 
                                       <p  className='whytargefy'>4. Offering safety training for workers to ensure they use scaffolding correctly and safely.</p> 
                                    </div>
   {/* <div className="d-flex justify-content-center align-items-center" style={{marginTop:'20px'}} >
    <div className="col-md-12 col-sm-6 text-center">
        <h4 style={{ color: 'white' }}>Take the Next Step with Targefy</h4>
        <NavLink to="/contactus" className="site-button btn-effect">Contact Us</NavLink>
    </div>
</div> */}

                                </div>
                               
                              
                              
                               
                            </div>
                            <div className="row">
                                {/* <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic4.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div> */}
                                 <div className="col-md-12 col-sm-6">
                                    {/* <div className="mt-box our-story-detail bg-moving "  style={{ backgroundImage: 'url(' + img2 + ')' }}> */}
                                        {/* <h4 className="text-uppercase m-b20">2011-12</h4> */}
                                     
                                        {/* <div className="tp-caption tp-resizeme" id="slide-902-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','90','130']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000;&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000;&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <h4 style={{color:'white'}}>Take the Next Step with Targefy </h4>
    <NavLink to="/contactus" className="site-button btn-effect">Contact Us</NavLink>
</div>  */}
                                        {/* <p className='whytargefy'>We invest in the latest technology and tools to support our data-driven approach. From advanced analytics platforms to cutting-edge marketing software, our tech stack enables us to gather, analyze, and act on data effectively. This technological edge allows us to deliver superior results and maintain a competitive advantage. </p> */}
                                    {/* </div> */}
                                    
                                </div>
                               
                              
                              
                               
                            </div>
                            
                         
                            
                        </div>
                    </div>
                    
                </div>
                
            </>
        );
    }
};

export default OurStory;