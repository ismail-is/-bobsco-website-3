import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/1.jpg');

class ModalPopup extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Your image is part of your reputation." pagename="Popup" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="row">
                                <ShortcodesNav />
                                <div className="col-md-9 col-sm-8">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Model</span> Popup</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    <div className="row">
                                        <div className="button-model col-md-3 col-sm-6">
                                            {/* TRIGGER THE MODAL WITH A BUTTON */}
                                            <button className="m-b30" data-toggle="modal" data-target="#Default-Modal">
                                                <img src={require('./../../images/gallery/pic1.jpg')} alt="" />
                                                <div className="text-center p-t20 m-b30"><h4> Default-Modal</h4></div>
                                            </button>
                                            {/* MODAL */}
                                            <div id="Default-Modal" className="modal fade" role="dialog">
                                                <div className="modal-dialog">
                                                    {/* MODAL CONTENT*/}
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
                                        <div className="button-model col-md-3 col-sm-6">
                                            {/* TRIGGER THE MODAL WITH A BUTTON */}
                                            <button className="m-b30" data-toggle="modal" data-target="#Small-Modal">
                                                <img src={require('./../../images/gallery/pic2.jpg')} alt="" />
                                                <div className="text-center p-t20 m-b30"><h4> Small-Modal</h4></div>
                                            </button>
                                            {/* MODAL */}
                                            <div id="Small-Modal" className="modal fade" role="dialog">
                                                <div className="modal-dialog modal-sm">
                                                    {/* MODAL CONTENT */}
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-secondry">
                                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                                            <h4 className="modal-title text-white">Modal Header</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <p>We denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasures that moment, so blinded by desires, that they cannot foresee indignations some dislike mens who are so beguiled demoralized..</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="site-button btn-effect button-sm text-uppercase letter-spacing-2" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="button-model col-md-3 col-sm-6">
                                            {/* TRIGGER THE MODAL WITH A BUTTON */}
                                            <button className="m-b30" data-toggle="modal" data-target="#large-Modal">
                                                <img src={require('./../../images/gallery/pic3.jpg')} alt="" />
                                                <div className="text-center p-t20 m-b30"><h4> Large-Modal</h4></div>
                                            </button>
                                            {/* MODAL */}
                                            <div id="large-Modal" className="modal fade" role="dialog">
                                                <div className="modal-dialog modal-lg">
                                                    {/* MODAL CONTENT */}
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
                                        <div className="button-model col-md-3 col-sm-6">
                                            {/* TRIGGER THE MODAL WITH A BUTTON */}
                                            <button className="m-b30" data-toggle="modal" data-target="#with-form">
                                                <img src={require('./../../images/gallery/pic4.jpg')} alt="" />
                                                <div className="text-center p-t20 m-b30"><h4> With-form</h4></div>
                                            </button>
                                            {/* MODAL */}
                                            <div id="with-form" className="modal fade" role="dialog">
                                                <div className="modal-dialog">
                                                    {/* Modal content*/}
                                                    <div className="modal-content">
                                                        <div className="modal-header bg-secondry">
                                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                                            <h4 className="modal-title text-white">Modal Header</h4>
                                                        </div>
                                                        <div className="modal-body">
                                                            <form id="demo-form" className="form-horizontal mb-lg" noValidate>
                                                                <div className="form-group mt-lg">
                                                                    <label className="col-sm-3 control-label">Name</label>
                                                                    <div className="col-sm-9">
                                                                        <input name="name" className="form-control" placeholder="Type your name..." required type="text" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="col-sm-3 control-label">Email</label>
                                                                    <div className="col-sm-9">
                                                                        <input name="email" className="form-control" placeholder="Type your email..." required type="email" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="col-sm-3 control-label">URL</label>
                                                                    <div className="col-sm-9">
                                                                        <input name="url" className="form-control" placeholder="Type an URL..." type="url" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className="col-sm-3 control-label">Comment</label>
                                                                    <div className="col-sm-9">
                                                                        <textarea rows={5} className="form-control" placeholder="Type your comment..." required defaultValue={""} />
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="site-button btn-effect text-uppercase button-sm letter-spacing-2 m-r15" data-dismiss="modal">Close</button>
                                                            <button type="button" className="site-button btn-effect text-uppercase button-sm letter-spacing-2">Save Changes </button>
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
                    {/* SECTION CONTENT END */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ModalPopup;