import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/4.jpg');

class Video extends React.Component {
    
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Building your dream house shouldn’t be a nightmare!" pagename="Video" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENTG */}
                    <div className="section-full inner-page-padding p-tb80">
                        <div className="container">
                            <div className="row">
                                <ShortcodesNav/>
                                <div className="col-md-9 col-sm-8">
                                    <div className="section-content">
                                        {/* Youtube Video */}
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Youtube</span> video</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title="Youtube Video" src="https://www.youtube.com/embed/s3A7AK1K2hc" width={560} height={315}></iframe>
                                            </div>
                                            
                                        </div>
                                        {/* Vimeo Video */}
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Vimeo</span> video</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="embed-responsive embed-responsive-16by9"><iframe title="Vimeo Video" src="https://player.vimeo.com/video/112734492" width={640} height={360}></iframe></div>
                                            
                                        </div>
                                        {/* Youtube Video With Popup */}
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Youtube video </span> with popup</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img src="http://i3.ytimg.com/vi/s3A7AK1K2hc/maxresdefault.jpg" alt="" />
                                                    <button type="button" className="play-now" data-toggle="modal" data-target="#myModal4">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Vimeo Video With popup */}
                                        <div className="m-b10">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">vimeo video </span> with popup</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1">
                                                    <img src="https://i.vimeocdn.com/video/497807626_590x332.jpg" alt="" />
                                                    <button type="button" className="play-now" data-toggle="modal" data-target="#myModal5">
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal4" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://www.youtube.com/watch?v=s3A7AK1K2hc' />
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal5" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/112734492' />
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    };
};

export default Video;