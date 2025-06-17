import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 1,
        title: 'Rooms & Halls',
        flaticon: 'flaticon-city',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 2,
        title: 'Renovation',
        flaticon: 'flaticon-paint',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 3,
        title: 'Construction',
        flaticon: 'flaticon-crane',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 4,
        title: 'Interior',
        flaticon: 'flaticon-decorating',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 5,
        title: 'Professional Opinion',
        flaticon: 'flaticon-chart',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    },
    {
        count: 6,
        title: 'Accurate Engineering',
        flaticon: 'flaticon-sketch',
        description: 'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.',
    }
]

var img1 = require('./../../images/background/bg-5.png');
var img2 = require('./../../images/background/line.png');


class OurServices4 extends React.Component {
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
                <div className="section-full p-t80 p-b50 bg-dark mobile-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator text-white">
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
                                        <div className="mt-icon-box-wraper p-a30 center m-b30 bg-white">
                                            <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                                <span className="icon-cell text-secondry"><i className={item.flaticon} /></span>
                                            </div>
                                            <div className="icon-content">
                                                <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.title}</h4>
                                                <p>{item.description}</p>
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

export default OurServices4;