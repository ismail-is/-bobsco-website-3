import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/2.jpg');

const blogs = [
    {
        image: require('./../../images/blog/blog-grid/pic4.jpg'),
        title: 'Building it better in concrete.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '17',
        month: 'Feb',
        year: '2022'
    },
    {
        image: require('./../../images/blog/default/thum1.jpg'),
        title: 'Design is where science and art break even.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '16',
        month: 'Jan',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic5.jpg'),
        title: 'Architecture is the art of how to waste space.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '14',
        month: 'Feb',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic6.jpg'),
        title: 'Being a famous designer is like being a famous dentist.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '25',
        month: 'Mar',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic7.jpg'),
        title: 'A designer is a planner with an aesthetic sense.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '18',
        month: 'May',
        year: '2022'
    },
    {
        image: require('./../../images/blog/default/thum2.jpg'),
        title: 'Being a famous designer is like being a famous dentist.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '15',
        month: 'Jan',
        year: '2022'
    },
    {
        image: require('./../../images/blog/default/thum3.jpg'),
        title: 'Architecture is the art of how to waste space.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '18',
        month: 'Mar',
        year: '2022'
    },
    {
        image: require('./../../images/blog/blog-grid/pic8.jpg'),
        title: 'Being a famous designer is like being a famous dentist.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '22',
        month: 'Feb',
        year: '2022'
    },
    {
        image: require('./../../images/blog/default/thum4.jpg'),
        title: 'Architecture is the art of how to waste space.',
        description: 'Our goal then and now is to provide quality on time projects. we let our quality work and commitment to customer satisfaction be our slogan.',
        date: '30',
        month: 'Jan',
        year: '2022'
    }
]

class BlogMasonary extends React.Component {
    
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
                <Header />
                <div className="page-content">
                <Banner title="For your roofing and siding, quality we’ll be providing!" pagename="Blog Masonry" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container clearfix">
                            <div className="portfolio-wrap mfp-gallery news-masonry clearfix row">
                                {/* COLUMNS 1 */}
                                {blogs.map((item, index) => (
                                    <div className="masonry-item col-md-4 col-sm-6">
                                        <div className="blog-post blog-grid date-style-1">
                                            <div className="mt-post-media mt-img-effect zoom-slow">
                                                <NavLink to={"/post-image"}><img src={item.image} alt="" /></NavLink>
                                            </div>
                                            <div className="p-tb20 bg-white">
                                                <div className="mt-post-info">
                                                    <div className="mt-post-meta ">
                                                        <ul>
                                                            <li className="post-date"><strong className="text-primary">{item.date}</strong> <span>{item.month} {item.year}</span></li>
                                                            <li className="post-author">By <NavLink to={"/post-image"}>Admin</NavLink> </li>
                                                            <li className="post-comment"><NavLink to={"/post-image"}>2 comment</NavLink> </li>
                                                        </ul>
                                                    </div>
                                                    <div className="mt-post-title ">
                                                        <h4 className="post-title"><NavLink to={"/post-image"} className=" font-weight-600 m-t0">{item.title}</NavLink></h4>
                                                    </div>
                                                    <div className="mt-post-text">
                                                        <p>{item.description}</p>
                                                    </div>
                                                    <NavLink to={"/post-image"} className="site-button btn-effect ">Read More</NavLink>
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

export default BlogMasonary;