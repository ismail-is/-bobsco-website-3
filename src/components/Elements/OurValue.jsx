import React from 'react';
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';

var img1 = require('./../../images/video-bg.jpg');

class OurValue extends React.Component {
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
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-3 col-sm-12">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Values</h2>
                                            </div>
                                            <p style={{textAlign:'justify',textJustify:'inter-word',lineHeight:'30px'}}>At Targefy, our values revolve around harnessing deep expertise and innovative strategies to create compelling brand narratives and deliver results. We are dedicated to setting new industry benchmarks and fostering growth for our clients with a commitment to excellence.</p>
                                        </div>
                                    </div>
                                    <div className="tp-caption tp-resizeme hidemobile" id="slide-902-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['90','90','90','130']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000;&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000;&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <NavLink to="/services" className="site-button btn-effect">Services</NavLink>
</div>
                                    {/* TITLE END */}
                                    {/* <div className="author-info p-t20">
                                        <div className="author-signature">
                                            <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                        </div>
                                        <div className="author-name">
                                            <h4 className="m-t0">David Houkr</h4>
                                            <p>Architect &amp; Founder</p>
                                        </div>
                                    </div> */}
                                    {/* <div className="video-section-full bg-no-repeat bg-cover overlay-wraper" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                                        <div className="overlay-main bg-black opacity-07" />
                                        <div className="video-section-inner">
                                            <div className="video-section-content">
                                                
                                                <div className="video-section-left">
                                                    <button type="button" className="play-now" data-toggle="modal" data-target="#myModal2">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </button>
                                                </div>
                                                <div className="video-section-right">
                                                <NavLink to={"#"} className="font-weight-600 text-uppercase" data-toggle="modal" data-target="#myModal">Video Presentation</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={100} duration={5} />%</div>
                                        <h4 className="m-tb0">Expertise </h4>
                                    </div>
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15  text-primary"><CountUp end={90} duration={5} />%</div>
                                        <h4 className="m-tb0">Satisfied Clients</h4>
                                    </div>
                                    <div className="mt-count m-b30 text-white mt-icon-box-wraper center  bg-dark p-a20">
                                        <div className="counter font-30 font-weight-800 m-b15 text-primary"><CountUp end={100} duration={5} />%</div>
                                        <h4 className="m-tb0">projects </h4>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6">
                                    <div className="p-b0">
                                        <div className="mt-box">
                                            <h3 className="m-t0">We are Experts <span className="font-weight-100">  </span><span className="text-primary">  in Marketing</span> </h3>
                                        </div>
                                        <span className="progressText text-black"><b>Designing skills                                        </b></span>
                                        <div className="progress mt-probar-1  m-b30 m-t10">
                                            <div className="progress-bar bg-primary " role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="95%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Editing skills 
                                        </b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={90} aria-valuemin={10} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="90%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Planning </b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="87%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Strategy</b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={84} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="84%" />
                                            </div>
                                        </div>
                                        <span className="progressText text-black"><b>Response rate 
                                        </b></span>
                                        <div className="progress mt-probar-1 m-b30 m-t10">
                                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="popOver" data-toggle="tooltips" data-placement="top" title="89%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal2" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/34741214' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurValue;