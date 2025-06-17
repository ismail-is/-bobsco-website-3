import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const recentPost = [
    {
        image: require('./../../images/blog/recent-blog/pic1.jpg'),
        title: 'Don’t get framed by the competition, trust our solid reputation.',
        date: '12 Jan',
        comment: '20 Comment'
    },
    {
        image: require('./../../images/blog/recent-blog/pic2.jpg'),
        title: 'building your dream house shouldn’t be a nightmare!',
        date: '10 Jan',
        comment: '05 Comment'
    },
    {
        image: require('./../../images/blog/recent-blog/pic3.jpg'),
        title: 'Helping you and your house become better acquainted.',
        date: '25 Mar',
        comment: '09 Comment'
    }
]

const logos = [
    { image: require('./../../images/client-logo/w1.png') },
    { image: require('./../../images/client-logo/w2.png') },
    { image: require('./../../images/client-logo/w3.png') },
]

const galleryImages = [
    { 
        image: require('./../../images/gallery/pic1.jpg') ,
        thumb: require('./../../images/gallery/thumb/pic1.jpg')
    },
    { 
        image: require('./../../images/gallery/pic2.jpg') ,
        thumb: require('./../../images/gallery/thumb/pic2.jpg')
    },
    { 
        image: require('./../../images/gallery/pic3.jpg') ,
        thumb: require('./../../images/gallery/thumb/pic3.jpg')
    },
    { 
        image: require('./../../images/gallery/pic4.jpg') ,
        thumb: require('./../../images/gallery/thumb/pic4.jpg')
    },
    { 
        image: require('./../../images/gallery/pic5.jpg') ,
        thumb: require('./../../images/gallery/thumb/pic5.jpg')
    },
    { 
        image: require('./../../images/gallery/pic6.jpg') ,
        thumb: require('./../../images/gallery/thumb/pic6.jpg')
    },
    { 
        image: require('./../../images/gallery/pic7.jpg') ,
        thumb: require('./../../images/gallery/thumb/pic7.jpg')
    },
    { 
        image: require('./../../images/gallery/pic8.jpg') ,
        thumb: require('./../../images/gallery/thumb/pic8.jpg')
    }
]

class BlogSidebar extends React.Component {
    
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
        const options = {
            loop:true,
            autoplay:true,
            items:1,
            nav:false,
            dots:true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
        return (
            <>
                <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
                <div className="col-lg-4 col-md-4">
                    <aside className="side-bar">
                        {/* SEARCH */}
                        <div className="widget bg-white ">
                            <h4 className="widget-title ">Search</h4>
                            <div className="search-bx">
                                <form role="search" method="post" action="">
                                    <div className="input-group">
                                        <input name="news-letter" type="text" className="form-control bg-gray" placeholder="Write your text" />
                                        <span className="input-group-btn bg-gray">
                                            <button type="submit" className="btn"><i className="fa fa-search" /></button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* ABOUT AUTHOR */}
                        <div className="widget bg-white">
                            <h4 className="widget-title ">About Author</h4>
                            <div className="widget-post m-b15">
                                <img src={require("./../../images/projects/square/pic4.jpg")} alt="" className="img-responsive" />
                            </div>
                            <p>Creating a sustainable future through building preservation, green architecture, and smart design. creating quality urban lifestyles, building stronger communities.
              </p>
                        </div>
                        {/* RECENT POSTS */}
                        <div className="widget bg-white  recent-posts-entry">
                            <h4 className="widget-title  ">Recent Posts</h4>
                            <div className="section-content">
                                <div className="widget-post-bx">
                                    {recentPost.map((item, index) => (
                                        <div className="widget-post clearfix">
                                            <div className="mt-post-media">
                                                <img src={item.image} alt=""/>
                                            </div>
                                            <div className="mt-post-info">
                                                <div className="mt-post-meta">
                                                    <ul>
                                                        <li className="post-author">{item.date}</li>
                                                        <li className="post-comment"> {item.comment}</li>
                                                    </ul>
                                                </div>
                                                <div className="mt-post-header">
                                                    <h6 className="post-title">{item.title}</h6>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* NEWSLETTER */}
                        <div className="widget widget_newsletter-2 bg-white  ">
                            <h4 className="widget-title  ">Newsletter</h4>
                            <div className="newsletter-bx p-a30">
                                <div className="newsletter-icon">
                                    <i className="fa fa-envelope-o" />
                                </div>
                                <div className="newsletter-content">
                                    <p>Subscribe to our mailing list to get the update to your email.</p>
                                </div>
                                <div className="m-t20">
                                    <form role="search" method="post" action="">
                                        <div className="input-group">
                                            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                            <span className="input-group-btn">
                                                <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* OUR CLIENT */}
                        <div className="widget">
                            <h4 className="widget-title ">Our Client</h4>
                            <OwlCarousel className="owl-carousel widget-client p-t10" {...options}>
                                {logos.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="ow-client-logo">
                                            <div className="client-logo">
                                                <NavLink to={"#"}><img src={item.image} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </OwlCarousel>
                        </div>
                        {/* OUR GALLERY  */}
                        <div className="widget widget_gallery mfp-gallery">
                            <h4 className="widget-title  ">Our Gallery</h4>
                            <ul>
                                {galleryImages.map((item, index) => (
                                    <li key={index}>
                                        <div className="mt-post-thum">
                                            <a href={item.image} className="mfp-link"><img src={item.thumb} alt=""/></a>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* TAGS */}
                        <div className="widget bg-white  widget_tag_cloud">
                            <h4 className="widget-title">Tags</h4>
                            <div className="tagcloud">
                                <NavLink to={"#"}>A new happy time</NavLink>&nbsp;
                                <NavLink to={"#"}>Hello!</NavLink>&nbsp;
                                <NavLink to={"#"}>Big deal</NavLink>&nbsp;
                                <NavLink to={"#"}>Food</NavLink>&nbsp;
                                <NavLink to={"#"}>Doing</NavLink>&nbsp;
                                <NavLink to={"#"}>Person</NavLink>&nbsp;
                                <NavLink to={"#"}>Inventors Tag</NavLink>&nbsp;
                                <NavLink to={"#"}>Between </NavLink>&nbsp;
                                <NavLink to={"#"}>Abilities</NavLink>&nbsp;
                                <NavLink to={"#"}>Fault </NavLink>&nbsp;
                                <NavLink to={"#"}>Gets </NavLink>&nbsp;
                                <NavLink to={"#"}>Macho</NavLink>
                            </div>
                        </div>
                    </aside>
                </div>
            </>
        );
    }
};

export default BlogSidebar;