import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/3.jpg');

const projects = [
    {
        image: require('./../../images/all bobsco/service/2.webp'),
        title: 'Engineering Design Services',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim',
        Url:'Engineering'
    },
    {
        image: require('./../../images/all bobsco/service/4.webp'),
        title: 'Oil & Gas Energy',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim',
           Url:'Oil'
    },
    {
        image: require('./../../images/all bobsco/service/3.webp'),
        title: ' Automation Industry',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim',
     Url:'Automation'
    },
    
    {
        image: require('./../../images/All manpower img/Civil Works  - Home Page.webp'),
        title: 'Renewable energy',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim',
        Url:'Renewable'
    },
    {
        image: require('./../../images/All manpower img/Scaffolding.webp'),
        title: 'Manufacturing',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim',
        Url:'Manufacturing'
    }
    
    
]

class ProjectCarousel extends React.Component {
    render() {
        
        const options = {
            loop:true,
            autoplay:false,
            center: false,
            items:3,
            margin:40,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },			
                991:{
                    items:3
                },
                1200:{
                    items:4
                }			
                
            }
        };

        return (
            <>
                {/* <Header /> */}
                <div className="page-content">
                    
                {/* <Banner title="Broad vision. Careful thought. Hand-crafted design." pagename="Project carousel" bgimage={bnrimg}/> */}
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-gray inner-page-padding">
                        <div className="container-fluid">
                            <div className="section-content">
                            <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Core Capabilities </span> & Services
</h2>
                                </div>
                            </div>
                        </div>
                                <div className="work-carousel-outer">
                                    <OwlCarousel className="owl-carousel work-carousel owl-btn-vertical-center" {...options}>
                                    
                                        {projects.map((item, index) => (
                                            <div key={index} className="item mt-box">
                                               <NavLink to={item.Url}> <div className="mt-img-effect mt-img-overlay7">
                                                    <img src={item.image} alt="" />
                                                </div></NavLink>
                                                <div className="mt-info p-a30">
                                                    <h4 className="m-b20 m-t0" style={{textAlign:'center'}}><NavLink to={"/services"}>{item.title}</NavLink></h4>
                                                    {/* <p>{item.description}</p> */}
                                                    {/* <NavLink to={"/project-detail"} className="site-button btn-effect">Read More</NavLink> */}
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                                <div className="tp-caption tp-resizeme" id="slide-902-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','90','130']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000;&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000;&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    {/* <NavLink to="/services" className="site-button btn-effect">Services</NavLink> */}
</div>

                            </div>
                        </div>
                    </div>
                    
                    {/* SECTION CONTENT END  */}
                </div>

                {/* <Footer /> */}
            </>
        );
    };
};

export default ProjectCarousel;