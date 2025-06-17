import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 1,
        title: 'Social Media Management/Marketing',
        image: require('./../../images/All manpower img/clients/1.jpg'),
        description: 'At Targefy, we craft dynamic social media strategies that amplify your brands voice, captivate audiences, and drive impactful engagement across all platforms',
    },
    {
        count: 2,
        image: require('./../../images/All manpower img/clients/2.jpg'),
        title: 'Paid Search & Media Campaigns',
        flaticon: 'flaticon-paint',
        description: 'At Targefy, we create high-impact paid search and media campaigns that drive traffic, maximize ROI, and elevate your brand’s presence with precision.',
    },
    {
        count: 3,
        image: require('./../../images/All manpower img/clients/3.jpg'),
        title: 'Email Marketing',
        flaticon: 'flaticon-crane',
        description: 'At Targefy, we deliver compelling email marketing campaigns that engage your audience, drive conversions, and build lasting relationships with tailored, strategic messaging.',
    },
    {
        count: 4,
        image: require('./../../images/All manpower img/clients/4.jpg'),
        title: 'Content Creation',
        flaticon: 'flaticon-decorating',
        description: 'Targefy delivers dynamic content that highlights your brand’s essence, engages your audience, and drives significant interaction across diverse platforms.',
    },
    {
        count: 5,
        image: require('./../../images/All manpower img/clients/5.jpg'),
        title: 'Website Creation & Management',
        flaticon: 'flaticon-chart',
        description: 'At Targefy, we design and manage stunning websites that captivate visitors, enhance user experience, and drive your online success with seamless functionality and tailored design.',
    },
    {
        count: 6,
        image: require('./../../images/All manpower img/clients/6.jpg'),
        title: 'SEO (Search Engine Optimization)',
        flaticon: 'flaticon-sketch',
        description: 'With Targefy, watch your website climb the search rankings as we deploy advanced SEO techniques to boost visibility and drive targeted, converting traffic.',
    },
    {
        count: 7,
        image: require('./../../images/All manpower img/clients/7.jpg'),
        title: 'Photography/Videography',
        flaticon: 'flaticon-builder',
        description: 'Elevate your brand with Targefy’s expert photography and videography, designed to captivate and enhance your online presence.',
    },
    {
        image: require('./../../images/All manpower img/clients/8.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/9.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/10.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/11.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/12.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/13.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/14.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/15.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/16.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/17.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/18.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/19.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/20.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/21.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/22.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/23.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/24.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/25.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/26.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/27.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/28.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/29.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/30.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/31.jpg'),
    },
    {
        image: require('./../../images/All manpower img/clients/32.jpg'),
    }
   
   
]

var img1 = require('./../../images/background/bg-5.png');
var img2 = require('./../../images/background/line.png');

class Clients extends React.Component {
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
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our </span> Clients</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                            {services.map((item, index) => (
                                <div key={index} className="col-md-2 col-sm-6">
                                    <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                                        {/* <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                            <span className="icon-cell text-secondry"><i className={item.flaticon} style={{color:'white'}}/></span>
                                        </div> */}
                                        <img src={item.image}/>
                                       
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

export default Clients;