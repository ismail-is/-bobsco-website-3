import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/background/bg-4.png');
var img2 = require('./../../images/background/bg-site.png');

class OurValue3 extends React.Component {
    
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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
                <div className="section-full p-t80 p-b50 bg-gray bg-no-repeat bg-bottom-right mobile-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-md-7 col-sm-6  m-b30">
                                    <div className="brochur bg-dark p-a20">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p-a30 bg-primary bg-bottom-right" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                                    <div className="text-black">
                                                        <h4 className="mt-tilte m-t0">Brochure</h4>
                                                        <p>Typefaces and layouts, and in appearance of different general the content of dorem ipsum dolor sit amet. </p>
                                                        <NavLink to="/project-detail" className="site-button-secondry btn-half"><span> Download brochure</span></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text-white p-r15">
                                                    <h4 className="mt-tilte">Let's help you!</h4>
                                                    <p>There are many variations of passages of lorem available, but the majority have suffered alteration in some form, by inject humour, or randomised words which don't look even slightly believable.</p>
                                                    <NavLink to="/project-detail" className="site-button btn-effect">Contact Us</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6 m-b30">
                                    <div className="our-exp">
                                        <div className="mt-box">
                                            <h3 className="m-t0"><span className="font-weight-100"> We have</span><span className="text-primary"> 15 years</span> experience in construction</h3>
                                        </div>
                                        <span className="progressText text-black"><b>Architecher</b></span>
                                        <div className="progress mt-probar-1  m-b30 m-t10">
                                            <div className="progress-bar bg-primary " role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="85%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Construction</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={78} aria-valuemin={10} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="78%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Interior</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="40%" />
                                            </div>
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

export default OurValue3;