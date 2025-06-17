import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/2.jpg');

const blogs = [
    {
        image: require('./../../images/blog/blog-grid/pic4.jpg'),
        title: 'We’ll nail your next project, because nobody wants!',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '17',
        month: 'Feb',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic1.jpg'),
        title: 'Helping you and your house become better acquainted.',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '16',
        month: 'Jan',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic2.jpg'),
        title: 'Creating quality urban lifestyles, building stronger communities.',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '14',
        month: 'Feb',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic3.jpg'),
        title: 'When it comes to your house, don’t mess with the rest, trust the best',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '25',
        month: 'Mar',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic4.jpg'),
        title: 'Don’t get framed by the competition, trust our solid reputation.',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '18',
        month: 'May',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic5.jpg'),
        title: 'We’re the construction kings, building up great things',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '15',
        month: 'Jun',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic6.jpg'),
        title: 'For your roofing and siding, quality we’ll be providing!',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '18',
        month: 'May',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic7.jpg'),
        title: 'When it comes to your house, don’t mess with the rest, trust the best.',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '22',
        month: 'Feb',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic8.jpg'),
        title: 'Creating quality urban lifestyles, building stronger communities.',
        description: 'Same as saying through shrinking from toil and pain these cases perfectly simple.',
        date: '30',
        month: 'Aug',
        year: '2022'
    }
]

class BlogGrid extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="In our work we have pride, quality is what we provide." pagename="Blog Grid" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-white inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container">
                            <div className="portfolio-wrap mfp-gallery news-grid clearfix row ">
                                {blogs.map((item, index) => (
                                    <div className="masonry-item  col-lg-4 col-md-4 col-sm-6" key={index}>
                                        <div className="blog-post blog-grid date-style-2">
                                            <div className="mt-post-media mt-img-effect zoom-slow">
                                                <NavLink to={"/post-image"}><img src={item.image} alt=""/></NavLink>
                                            </div>
                                            <div className="mt-post-info p-t30">
                                                <div className="mt-post-title ">
                                                    <h4 className="post-title"><NavLink to={"/post-image"}>{item.title}</NavLink></h4>
                                                </div>
                                                <div className="mt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"> <i className="fa fa-calendar" /><strong>{item.date}</strong> <span>{item.month}</span> </li>
                                                        <li className="post-author"><i className="fa fa-user" /><NavLink to={"/post-image"}>By <span>John</span></NavLink> </li>
                                                        <li className="post-comment"><i className="fa fa-comments" /> <NavLink to={"/post-image"}>0 Comments</NavLink> </li>
                                                    </ul>
                                                </div>
                                                <div className="mt-post-text">
                                                    <p>{item.description}</p>
                                                </div>
                                                <div className="clearfix">
                                                    <div className="mt-post-readmore pull-left">
                                                    <NavLink to={"/post-image"} title="READ MORE" rel="bookmark" className="site-button-link">Read More<i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                    </div>
                                                    <div className="widget_social_inks pull-right">
                                                        <ul className="social-icons social-radius social-dark m-b0">
                                                            <li><NavLink to={"#"} className="fa fa-facebook"></NavLink></li>
                                                            <li><NavLink to={"#"} className="fa fa-twitter" ></NavLink></li>
                                                            <li><NavLink to={"#"} className="fa fa-rss" ></NavLink></li>
                                                            <li><NavLink to={"#"} className="fa fa-youtube" ></NavLink></li>
                                                            <li><NavLink to={"#"} className="fa fa-instagram" ></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                               
                            </div>
                            <ul className="pagination m-tb0">
                                <li><NavLink to={"#"}>«</NavLink></li>
                                <li><NavLink to={"#"}>1</NavLink></li>
                                <li><NavLink to={"#"}>2</NavLink></li>
                                <li><NavLink to={"#"}>3</NavLink></li>
                                <li><NavLink to={"#"}>4</NavLink></li>
                                <li><NavLink to={"#"}>5</NavLink></li>
                                <li><NavLink to={"#"}>»</NavLink></li>
                            </ul>
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

export default BlogGrid;