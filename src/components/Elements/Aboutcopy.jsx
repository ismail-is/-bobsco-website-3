import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var img1 = require('./../../images/background/bg-6.png');
var img2 = require('./../../images/background/line.png');
const images = [
    require('./../../images/All manpower img/abouts1.jpg'),
    require('./../../images/All manpower img/abouts2.jpg'),
    require('./../../images/All manpower img/abouts3.jpg'),
]

var bnr1 = require('./../../images/background/line.png');

class Aboutcopy extends React.Component {
    
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
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            <>
               
           
           
           













                <>
                <div className="section-full p-t80 p-b80 bg-white bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                      
                        <div className="section-content our-story">
                           
                        <div className="section-content ">
                            <div className="row">
                            <div className="col-md-5 col-sm-5">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/All manpower img/ser1.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t50">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")",width:"100%"}}>
                                            {/* <span className="text-primary large-title">40</span> */}
                                            {/* <span className="large-title-info">Years of Experience</span> */}
                                            <h3 className="font-weight-900" style={{textAlign:'start',color:'#026EB6'}}> Manpower Supply</h3>
                                        </div>
                                        {/* <h3 className="font-weight-600">  Drive Growth with<span style={{color:'#026EB6'}}> Effective</span>  Branding </h3> */}
                                        <p className='p-t30' >
                                        We have a variety of available qualified and skilled manpower to support the upcoming projects in KSA as well as the running industry and Shutdowns/Turn Around on very competitive and flexible terms. We deal with following manpower category

                                        </p>
                                        <p >Planning Engineers •QA/QC Mechanical •QA/QC Civil •QA/QC Electrical •Helper/Labor (Skilled & Semi Skilled) •Carpenter Shuttering •Carpenter Finishing •Gypsum (Carpenter) •Steel Fixer •Steel Fabricator •Mason (Block/Plaster) •Tile Fixer •Marble Tiles •Painter Roller •Painter (Spray) •Scaffolding Glass Fixer •Insulator Electrical (Normal) •Electrical (Industrial) •Duct Fitter •Duct Fabricator •Aluminum (Fabricator) •Plumber •Pipe Fitter •Pipe Fabricator •Forklift Operator •A/C Mechanic •Rigger •Erector •Welder (Normal) •Welder (Mig) •Welder (3G-4G) •Welder (6G) •Welder (Tig) •Secretary •Foreman (Civil Mech) •Instrument Fitter •Tea Boy •Store Keeper •Firefighting Tech. etc...
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                          






                            <div className="row">
                               
                            <div className="section-content " style={{margin:'12px'}}>
                            <div className="row">
                            <div className="col-md-5 col-sm-5">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/All manpower img/Civi lWorks  - Services Page.webp')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t1">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")",width:"100%"}}>
                                            {/* <span className="text-primary large-title">40</span> */}
                                            {/* <span className="large-title-info">Years of Experience</span> */}
                                            <h3 className="font-weight-900" style={{textAlign:'start',color:'#026EB6'}}>Civil Works</h3>
                                        </div>
                                        {/* <h3 className="font-weight-600">  Drive Growth with<span style={{color:'#026EB6'}}> Effective</span>  Branding </h3> */}
                                        <p className='p-t1' style={{textAlign:"justify",textJustify:'inter-word'}}>
                                        your trusted partner in delivering high-quality civil work services

                                        </p>
                                        <p>1. Site Preparation Before construction begins, proper site preparation is crucial. Land Clearing, Excavation, Erosion Control.</p>
                                       <p>2. Earthworks Our earthworks services ensure the groundwork for your project is solid and dependable: Excavation and Grading, Trenching, Backfilling.</p>
                                       <p>3. Foundations A strong foundation is key to any construction project. We specialize in: Footings and Foundations, Retaining Walls, Foundation Repair.</p>
                                       <p>4. Roadwork and Pavement Our roadwork and pavement services include: Road Construction, Paving, Road Repair</p>
                                       <p>5. Drainage Systems Effective drainage is essential for protecting your property. We offer: Stormwater Management, Drainage Installation, Maintenance.</p>
                                       <p>6. Utility Installation We provide comprehensive utility installation services, including: Water and Sewer Lines, Electrical Trenches, Gas Lines.</p>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>




                            <div className="section-content ">
                            <div className="row">
                            <div className="col-md-4 col-sm-5">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/All manpower img/ser3.jpg')} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t70">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")",width:"100%"}}>
                                            {/* <span className="text-primary large-title">40</span> */}
                                            {/* <span className="large-title-info">Years of Experience</span> */}
                                            <h3 className="font-weight-900" style={{textAlign:'start',color:'#026EB6'}}>Equipment Rental</h3>
                                        </div>
                                        {/* <h3 className="font-weight-600">  Drive Growth with<span style={{color:'#026EB6'}}> Effective</span>  Branding </h3> */}
                                        <p className='p-t30'>
                                        We are willing to provide services of our equipments, directly under clients control on hourly, weekly and monthly rates basis. Our Supervisory staff are well experienced and are familiar with Modern Industrial Technical Standards and Safety Regulations. BUS, COASTER, HIACE, PICKUP, AMBULANCE, DIESEL TANKER, WATER TANKER, BOOM TRUCK, TRAILER, DUMP TRUCK, CRANE, FORK LIFT, MANLIFT, WHEEL LOADER, EXCAVATOR, GENERATOR, AIR COMPRESSOR, WELDING MACHINE, TOWER LIGHT & OTHER EQUIP.

                                        </p>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        



                        <div className="row">
                               
                               <div className="section-content " style={{margin:'12px'}}>
                               <div className="row">
                               <div className="col-md-4 col-sm-5">
                                               <div className="project-detail-pic m-b30">
                                                   <div className="mt-media">
                                                       <img src={require('./../../images/All manpower img/ser4.jpg')} alt="" />
                                                   </div>
                                               </div>
                                           </div>
                                   <div className="col-lg-7 col-md-7">
                                       <div className="m-about-containt text-black p-t30">
                                           <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")",width:"100%"}}>
                                               {/* <span className="text-primary large-title">40</span> */}
                                               {/* <span className="large-title-info">Years of Experience</span> */}
                                               <h3 className="font-weight-900" style={{textAlign:'start',color:'#026EB6'}}>Material Supply</h3>
                                           </div>
                                           {/* <h3 className="font-weight-600">  Drive Growth with<span style={{color:'#026EB6'}}> Effective</span>  Branding </h3> */}
                                           <p className='p-t50' >
                                           Our Company is involved in supply of Industrial items all over the kingdom from various manufactures and brands around the world. We represent many well-known international manufacturers and suppliers of Industrial Materials. Some of them include Jotun Paints, Eyewex Safety Items, SGN Abrasives, PMS Safety Harness & Slingsete We are blessed with a huge resource to fulfill the need of each and every customer approaching us. We can offer a complete procurement and supply service for a wide range of industrial materials such as Pipefittings, Valves, Hoses, Paints, Abrasives, Tools, Safety Items, Welding Products, Building Materials etc.
                                           </p>
                                          
                                          
                                       </div>
                                   </div>
                               </div>
                           </div>
                               </div>



                               <div className="section-content ">
                            <div className="row">
                            <div className="col-md-4 col-sm-5">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img src={require('./../../images/All manpower img/Scaffolding - Services Page.webp')} alt=""  />
                                                </div>
                                            </div>
                                        </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t70">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")",width:"100%"}}>
                                            {/* <span className="text-primary large-title">40</span> */}
                                            {/* <span className="large-title-info">Years of Experience</span> */}
                                            <h3 className="font-weight-900" style={{textAlign:'start',color:'#026EB6'}}>Scaffolding</h3>
                                        </div>
                                        {/* <h3 className="font-weight-600">  Drive Growth with<span style={{color:'#026EB6'}}> Effective</span>  Branding </h3> */}
                                        {/* <p className='p-t30' style={{textAlign:"justify",textJustify:'inter-word'}}>
                                        We have a variety of available qualified and skilled manpower to support the upcoming projects in KSA as well as the running industry and Shutdowns/Turn Around on very competitive and flexible terms. We deal with following manpower category

                                        </p> */}
                                        {/* <p  style={{textAlign:"justify",textJustify:'inter-word'}}>Planning Engineers •QA/QC Mechanical •QA/QC Civil •QA/QC Electrical •Helper/Labor (Skilled & Semi Skilled) •Carpenter Shuttering •Carpenter Finishing •Gypsum (Carpenter) •Steel Fixer •Steel Fabricator •Mason (Block/Plaster) •Tile Fixer •Marble Tiles •Painter Roller •Painter (Spray) •Scaffolding Glass Fixer •Insulator Electrical (Normal) •Electrical (Industrial) •Duct Fitter •Duct Fabricator •Aluminum (Fabricator) •Plumber •Pipe Fitter •Pipe Fabricator •Forklift Operator •A/C Mechanic •Rigger •Erector •Welder (Normal) •Welder (Mig) •Welder (3G-4G) •Welder (6G) •Welder (Tig) •Secretary •Foreman (Civil Mech) •Instrument Fitter •Tea Boy •Store Keeper •Firefighting Tech. etc...
                                        </p> */}
                                        <div className='p-t50' ><p>1. Scaffolding services involve the design, erection, maintenance, and dismantling of temporary structures used to support workers and materials during the construction, repair, or maintenance of buildings, bridges, and other large structures. These services are crucial for ensuring safety and efficiency on construction sites, providing access to hard-to-reach areas</p>
                                        <p>2. Assembling the scaffolding structure on-site, ensuring stability and safety.</p>
                                        <p>3. Providing expert advice on scaffolding selection and best practices.</p>
                                        <p>4. Offering safety training for workers to ensure they use scaffolding correctly and safely.</p></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </>
            </>





        );
    }
};

export default Aboutcopy;