import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 'Our Vision',
        title: `Our Vision `,
        icon: require('./../../images/All manpower img/vision.png'),
        description: 'Setting high standards of quality and services that focuses on every specified detail.',
    },
    
    {
        count: 'Our Values ',
        title: 'Our Values ',
        icon: require('./../../images/All manpower img/opportunity.png'),
        description: 'We value teamwork, integrity, mutual respect, initiative, innovation and loyalty. It is this work ethic that is behind our success.',
    }
]
const services1 = [
   
    {
        count: 'Our Mission',
        title: 'Our Mission',
        icon: require('./../../images/All manpower img/script.png'),
        description: `Quality & customer satisfaction is the prime motto of our company. Our mission is to continuously optimize our business through our world class solutions, services & products. We ensure the success of our company by constantly & consistently satisfying our costumer's requirements. 
           Our values are absolutely business relevant and we strongly believe that no customer would to work with a company which is not perceived as reliable, excellent & innovative.`,
    }
]
var img1 = require('./../../images/background/ptn-1.png');

class Specialization4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-tb80 bg-white bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        {/* <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Speciallization</h2>
                                </div>
                            </div>
                        </div> */}
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                    {services.map((item, index) => (
                                        <div className="col-md-6 col-sm-6" key={index} >
                                            <div className="mt-icon-box-wraper m-b30" >
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50" >
                                                    <span className="icon-count-number" style={{fontSize:'30px',color:'#000000'}}>{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell" ><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        {/* <h4 className="mt-tilte m-b25">{item.title}</h4> */}
                                                        <p style={{textAlign:'justify',textJustify:"inter-word"}}>{item.description}</p>
                                                        {/* <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                
                            </div>


                            <div className="row" style={{display:'flex',justifyContent:'center'}}>
                                    {services1.map((item, index) => (
                                        <div className="col-md-6 col-sm-6" key={index}  >
                                            <div className="mt-icon-box-wraper m-b30" >
                                                <div className="relative icon-count-2 bg-gray p-a30 p-tb50" >
                                                    <span className="icon-count-number" style={{fontSize:'30px',color:'#000000'}}>{item.count}</span>
                                                    <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                                                        <span className="icon-cell" ><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        {/* <h4 className="mt-tilte m-b25">{item.title}</h4> */}
                                                        <p style={{textAlign:'justify',textJustify:"inter-word"}}>{item.description}</p>
                                                        {/* <NavLink to={"/services"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink> */}
                                                    </div>
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

export default Specialization4;