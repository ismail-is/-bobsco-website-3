import React from 'react';
import { NavLink } from 'react-router-dom';

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
    }
]

var bnr1 = require('./../../images/background/bg5.jpg');

class Blogs2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 square_shape1 bg-parallax bg-cover" data-stellar-background-ratio="0.5" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head ">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Latest</span> Blog</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                {blogs.map((item, index) => (
                                    <div className="col-md-4 col-sm-6" key={index}>
                                        <div className="blog-post blog-grid date-style-2 bg-white">
                                            <div className="mt-post-media mt-img-effect zoom-slow">
                                               <NavLink to={"/post-image"}><img src={item.image} alt=""/></NavLink>
                                            </div>
                                            <div className="mt-post-info p-a30">
                                                <div className="mt-post-title ">
                                                    <h4 className="post-title"><NavLink to={"/post-image"}>{item.title}</NavLink></h4>
                                                </div>
                                                <div className="mt-post-meta ">
                                                    <ul>
                                                        <li className="post-date"> <i className="fa fa-calendar" /><strong>{item.date}</strong> <span>{item.month}</span> </li>
                                                        <li className="post-author"><i className="fa fa-user" /><NavLink to={"/post-image"}>By <span>John</span></NavLink> </li>
                                                        <li className="post-comment"><i className="fa fa-comments" /><NavLink to={"/post-image"}>0 Comments</NavLink> </li>
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
                        </div>
                    </div>
                    <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
                        <strong>Blog</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Blogs2;