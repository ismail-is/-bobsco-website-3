import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/All manpower img/abouts1.jpg'),
    require('./../../images/All manpower img/abouts2.jpg'),
    require('./../../images/All manpower img/abouts3.jpg'),
]

var bnr1 = require('./../../images/background/line.png');

class About4 extends React.Component {
    
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
                <div className="section-full p-t80 p-b80 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img">
                                                    <NavLink to="/about"><img src={item} alt=""/></NavLink>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t80">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")",width:"100%"}}>
                                            <span className="text-primary large-title">25</span>
                                            <span className="large-title-info">Years of Experience</span>
                                           
                                        </div>
                                         <h3 className="font-weight-900" > <span style={{color:'#E81D21'}}> Creative Features</span> <br/> From Production Industry</h3>
                                        
                                        {/* <h3 className="font-weight-600">  Drive Growth with<span style={{color:'#E81D21'}}> Effective</span>  Branding </h3> */}
                                        <p className='p-t30' style={{textAlign:"justify",textJustify:'inter-word'}}>
Welcome to BOBSCO, our company strives to develop and maintain an environment that encourages our energetic and diverse workforce to create value of our clients.

                                        </p>
                                        <p  style={{textAlign:"justify",textJustify:'inter-word'}}>We have various sectors like, Engineering, Oil & Gas, Manufacturing Whatever your requirement is, our team can turn the burden of managing project and work force into a long term business for your organization.
                                        </p>
                                        <div className="author-info p-t20">
                                            {/* <div className="author-signature">
                                                <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                            </div> */}
                                            {/* <div className="author-name">
                                                <h4 className="m-t0">David Houkr</h4>
                                                <p>Architect &amp; Founder</p>
                                            </div> */}
                                             {/* <div className="relaive icon-count-2 " >
                                                    <span className="icon-count-number">1</span>
                                                   
                                                  
                                                </div> */}
                                            <NavLink to="/contactus" className="site-button btn-effect m-b15"><span>contact us</span></NavLink>
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

export default About4;