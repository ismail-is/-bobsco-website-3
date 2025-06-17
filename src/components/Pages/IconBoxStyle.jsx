import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';

var bnrimg = require('./../../images/banner/3.jpg');

class IconBoxStyle extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="In our work we have pride, quality is what we provide" pagename="Icon Box" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            <div className="row">
                                <ShortcodesNav />
                                <div className="col-md-9 col-sm-8">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Icon</span> box</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    {/* ICON BOX */}
                                    <div className="section-content m-b0">
                                        {/* ICON BOX */}
                                        <div className="section-content m-b50">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 m-b30">
                                                    <div className="mt-icon-box-wraper bx-style-1 p-a30 center bg-white block-shadow">
                                                        <div className="mt-icon-box-sm bg-secondry m-b20   scale-in-center">
                                                            <span className="icon-cell text-primary"><i className="fa fa-trophy" /></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="mt-tilte">Icon square</h4>
                                                            <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 m-b30">
                                                    <div className="mt-icon-box-wraper bx-style-1 p-a30 center bg-white hover-shadow">
                                                        <div className="mt-icon-box-sm radius bg-secondry m-b20  scale-in-center">
                                                            <span className="icon-cell text-primary"><i className="fa fa-trophy" /></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="mt-tilte">Icon circle</h4>
                                                            <p>From complete turn key to project manager. Leave the building to the professionals.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 m-b30">
                                                    <div className="mt-icon-box-wraper bx-style-1 p-a30 center bg-white hover-shadow">
                                                        <div className="mt-icon-box-sm text-secondry bg-white radius bdr-2 bdr-solid bdr-black m-b20 scale-in-center">
                                                            <span className="icon-cell text-secondry"><i className="fa fa-trophy" /></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="mt-tilte">Border icon</h4>
                                                            <p>From complete turn key to project manager. Leave the building to the professionals.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 m-b30">
                                                    <div className="mt-icon-box-wraper bx-style-1 p-a30 center bg-white hover-shadow">
                                                        <div className="icon-xl m-b20 scale-in-center">
                                                            <span className="icon-cell text-primary"><i className="fa fa-trophy" /></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="mt-tilte">Normal icon center</h4>
                                                            <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* ICON BOX */}
                                        <div className="section-content m-b50">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 m-b30">
                                                    <div className="mt-icon-box-wraper bx-style-1 p-a20 left bg-white block-shadow">
                                                        <div className="mt-icon-box-xs bg-secondry scale-in-center">
                                                            <span className="icon-cell text-primary"><i className="fa fa-trophy" /></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="mt-tilte">Square left</h4>
                                                            <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 m-b30">
                                                    <div className="mt-icon-box-wraper bx-style-1 p-a20 right bg-white hover-shadow">
                                                        <div className="mt-icon-box-xs bg-secondry scale-in-center">
                                                            <span className="icon-cell text-primary"><i className="fa fa-trophy" /></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="mt-tilte">Square right</h4>
                                                            <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 m-b30">
                                                    <div className="mt-icon-box-wraper bx-style-1 p-a20 left bg-white hover-shadow">
                                                        <div className="mt-icon-box-xs radius bg-secondry scale-in-center">
                                                            <span className="icon-cell text-primary"><i className="fa fa-trophy" /></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="mt-tilte">Circle left</h4>
                                                            <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 m-b30">
                                                    <div className="mt-icon-box-wraper bx-style-1 p-a20 right bg-white hover-shadow">
                                                        <div className="mt-icon-box-xs radius bg-secondry scale-in-center">
                                                            <span className="icon-cell text-primary"><i className="fa fa-trophy" /></span>
                                                        </div>
                                                        <div className="icon-content">
                                                            <h4 className="mt-tilte">Circle right</h4>
                                                            <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="mt-icon-box-wraper bx-style-1 p-a20 left bg-white block-shadow">
                                                    <div className="mt-icon-box-xs text-secondry bg-white radius bdr-1  bdr-solid scale-in-center">
                                                        <span className="icon-cell text-secondry"><i className="fa fa-trophy" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte">Border left</h4>
                                                        <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="mt-icon-box-wraper bx-style-1 p-a20 right bg-white hover-shadow">
                                                    <div className="mt-icon-box-xs text-secondry bg-white radius bdr-1  bdr-solid scale-in-center">
                                                        <span className="icon-cell text-secondry"><i className="fa fa-trophy" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte">Border right</h4>
                                                        <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="mt-icon-box-wraper bx-style-1 p-a20 left bg-white hover-shadow">
                                                    <div className="icon-sm m-b20 scale-in-center">
                                                        <span className="icon-cell text-secondry"><i className="fa fa-trophy" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte">Normal left</h4>
                                                        <p>From complete turn key to project manager. Leave the building to the professionals</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 m-b30">
                                                <div className="mt-icon-box-wraper bx-style-1 p-a20 right bg-white hover-shadow">
                                                    <div className="icon-sm m-b20 scale-in-center">
                                                        <span className="icon-cell text-secondry"><i className="fa fa-trophy" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte">Normal right</h4>
                                                        <p>From complete turn key to project manager. Leave the building to the professionals</p>
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

export default IconBoxStyle;