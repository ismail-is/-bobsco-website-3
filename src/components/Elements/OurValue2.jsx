import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const img1 = require('./../../images/all bobsco/home/home2.webp');


const OurValue2 = () => {
   

   

   
   
   

    return (
        <>
            <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-7 col-sm-6">
                                <div className="video-section-full-v2">
                                    <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{ backgroundImage: `url(${img1}) `}}>
                                        <div className="overlay-main bg-black opacity-04" />
                                        <div className="video-section-inner">
                                            <div className="video-section-content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-6" >
                                <div className="video-part-2" style={{marginTop:'50px'}}>
                                    <h3 className="font-weight-800" style={{textAlign:'start'}}>Delivering Engineering <br/><span  style={{ color: '#E81D21' }}>Value Through Expertise
 </span> </h3>
                                    <p style={{textAlign:'justify',textJustify:'inter-word'}}>With projects becoming larger and more complex, the demand for efficient engineering solutions is
growing. The oil and gas industry are witnessing a surge in demand for specialized expertise across
engineering, procurement, and construction. Based out of our Engineering Centre in India, our
multidisciplinary team partners closely with clients to co-create customized, value-driven solutons.
We are commited to delivering high-quality services that reduce costs, conserve resources, and
boost operational efficiency—helping clients stay ahead in a competitiveve global market. 
</p>
                                    {/* <ul className="list-angle-right anchor-line">
                                        <li>Innovative Digital Strategies</li>
                                        <li>Expertise in Brand Transformation</li>
                                        <li>Strategic Audience Connection</li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            
        </>
    );
};

export default OurValue2;
