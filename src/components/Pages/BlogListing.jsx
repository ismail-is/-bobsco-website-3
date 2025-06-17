import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import BlogList from './../Elements/BlogList';
import BlogSidebar from './../Elements/BlogSidebar';

var bnrimg = require('./../../images/banner/3.jpg');

class BlogListing extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                <Banner title="Quality is what we pursue, We know what we do." pagename="Blog Listing" bgimage={bnrimg}/>
                   
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container">
                            <div className="row">
                                <BlogList />
                                <BlogSidebar />
                            </div>
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />

            </>
        );
    };
};

export default BlogListing;