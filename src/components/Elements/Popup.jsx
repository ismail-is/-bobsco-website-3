import React from 'react';
import $ from 'jquery'; // Import jQuery if you plan to use it
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/1.jpg');

class Popup extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 300) {
            $('#Default-Modal').modal('show'); // Using jQuery to show the modal
            window.removeEventListener('scroll', this.handleScroll);
        }
    };

    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="page-content">
                    {/* <Banner title="Your image is part of your reputation." pagename="Popup" bgimage={bnrimg}/> */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                {/* <ShortcodesNav /> */}
                                <div className="col-md-9 col-sm-8">
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-black text-uppercase sep-line-one ">
                                                    <span className="font-weight-300 text-primary">Model</span> Popup
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="button-model col-md-3 col-sm-6">
                                            <button className="m-b30" data-toggle="modal" data-target="#Default-Modal">
                                                <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                                <div className="text-center p-t20 m-b30">
                                                    <h4>Default-Modal</h4>
                                                </div>
                                            </button>
                                            <div id="Default-Modal" className="modal fade" role="dialog">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-secondry">
                                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                                            <h4 className="modal-title text-white">Modal Header</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>We denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasures that moment, so blinded by desires, that they cannot foresee indignations some dislike mens who are so beguiled demoralized.</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="site-button btn-effect button-sm text-uppercase letter-spacing-2" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Popup;
