import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 1,
        title: 'Social Media Management/Marketing',
        flaticon: 'flaticon-city',
        description: 'At Targefy, we craft dynamic social media strategies that amplify your brands voice, captivate audiences, and drive impactful engagement across all platforms',
    },
    {
        count: 2,
        title: 'Paid Search & Media Campaigns',
        flaticon: 'flaticon-paint',
        description: 'At Targefy, we create high-impact paid search and media campaigns that drive traffic, maximize ROI, and elevate your brand’s presence with precision.',
    },
    {
        count: 3,
        title: 'Email Marketing',
        flaticon: 'flaticon-crane',
        description: 'At Targefy, we deliver compelling email marketing campaigns that engage your audience, drive conversions, and build lasting relationships with tailored, strategic messaging.',
    },
    {
        count: 4,
        title: 'Content Creation',
        flaticon: 'flaticon-decorating',
        description: 'Targefy delivers dynamic content that highlights your brand’s essence, engages your audience, and drives significant interaction across diverse platforms.',
    },
    {
        count: 5,
        title: 'Website Creation & Management',
        flaticon: 'flaticon-chart',
        description: 'At Targefy, we design and manage stunning websites that captivate visitors, enhance user experience, and drive your online success with seamless functionality and tailored design.',
    },
    {
        count: 6,
        title: 'SEO (Search Engine Optimization)',
        flaticon: 'flaticon-sketch',
        description: 'With Targefy, watch your website climb the search rankings as we deploy advanced SEO techniques to boost visibility and drive targeted, converting traffic.',
    },
    {
        count: 7,
        title: 'Photography/Videography',
        flaticon: 'flaticon-builder',
        description: 'Elevate your brand with Targefy’s expert photography and videography, designed to captivate and enhance your online presence.',
    }
   
   
]

var img1 = require('./../../images/background/bg-5.png');
var img2 = require('./../../images/background/line.png');

class OurServices3 extends React.Component {
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
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">All</span> Services</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                            {services.map((item, index) => (
                                <div key={index} className="col-md-4 col-sm-6">
                                    <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                            <span className="icon-cell text-secondry"><i className={item.flaticon} style={{color:'white'}}/></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.title}</h4>
                                            <p style={{textAlign:'justify',textJustify:'inter-word'}}>{item.description}</p>
                                            <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurServices3;