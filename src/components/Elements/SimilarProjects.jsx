import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/projects/square/pic4.jpg'),
        title: 'Delivering architecture, planning, and design',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/projects/square/pic7.jpg'),
        title: 'Capitalizing on the unique qualities of each place',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/square/pic5.jpg'),
        title: 'Delivering architecture, planning, and design',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/projects/square/pic6.jpg'),
        title: 'Improving quality of life with an integrated unified approach',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    },
    {
        image: require('./../../images/projects/square/pic3.jpg'),
        title: 'Unique solutions for your home through a personalized process',
        description: 'Morbi mattis ex non urna condim entum, eget eleifend diam molestie. Curabitur lorem enim'
    }
]

var bnr1 = require('./../../images/background/bg-6.png');

class SimilarProjects extends React.Component {
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
                <div className="section-full p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Similar</span> projects</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                    </div>
                    <div className="section-content container-fluid">
                        <div className="similar-carousel-outer">
                            
                            <OwlCarousel className="owl-carousel similar-projects owl-btn-vertical-center" {...options}>
                                {projects.map((item, index) => (
                                            <div key={index} className="item mt-box">
                                                <div className="mt-img-effect mt-img-overlay7">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="mt-info p-a30">
                                                    <h4 className="m-b20 m-t0"><NavLink to={"#"}>{item.title}</NavLink></h4>
                                                    <p>{item.description}</p>
                                                    <NavLink to={"#"} className="site-button btn-effect">Read More</NavLink>
                                                </div>
                                            </div>
                                        ))}
                                
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>projects</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default SimilarProjects;