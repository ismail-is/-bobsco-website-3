import React from 'react';
import { NavLink } from 'react-router-dom';

const blogs = [
    {
        image: require('./../../images/blog/default/thum1.jpg'),
        title: 'Creating quality urban lifestyles, building stronger communities.',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis',
        date: '20 May',
        year: '2022'
    },
    {
        image: require('./../../images/blog/default/thum2.jpg'),
        title: 'When it comes to your house, don’t mess with the rest, trust the best',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis',
        date: '20 May',
        year: '2022'
    },
    {
        image: require('./../../images/blog/default/thum3.jpg'),
        title: 'Making your vision come true, that is what we do.',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis',
        date: '20 May',
        year: '2022'
    },
    {
        image: require('./../../images/blog/default/thum4.jpg'),
        title: 'Putting a plan to action, to assure your satisfaction!',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis',
        date: '20 May',
        year: '2022'
    },
    {
        image: require('./../../images/blog/default/thum5.jpg'),
        title: 'Don’t get framed by the competition, trust our solid reputation.',
        description: 'Asperiores, tenetur, blanditiis, quaerat odit ex exercitationem pariatur quibusdam veritatis quisquam laboriosam esse beatae hic perferendis velit deserunt soluta iste repellendus officia in neque veniam debitis',
        date: '20 May',
        year: '2022'
    }
]


class BlogList extends React.Component {
    render() {
        return (
            <>
                <div className="col-lg-8 col-md-8">
                    <div className="news-listing ">
                        {blogs.map((item, index) => (
                            <div className="blog-post blog-lg date-style-3 block-shadow" key={index}>
                                <div className="mt-post-media mt-img-effect zoom-slow">
                                    <NavLink to={"/post-image"}><img src={item.image} alt=""/></NavLink>
                                </div>
                                <div className="mt-post-info p-a30 p-m30 bg-white">
                                    <div className="mt-post-title ">
                                        <h4 className="post-title"><NavLink to={"/post-image"}>{item.title}</NavLink></h4>
                                    </div>
                                    <div className="mt-post-meta ">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar text-primary" /><strong>{item.date}</strong> <span> {item.year}</span> </li>
                                            <li className="post-author"><i className="fa fa-user text-primary" /><NavLink to={"/post-image"}>By <span>John</span></NavLink> </li>
                                            <li className="post-comment"><i className="fa fa-comments text-primary" /> <NavLink to={"/post-image"}>0 Comments</NavLink> </li>
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
                                                <li><NavLink to={"#"} className="fa fa-twitter"></NavLink></li>
                                                <li><NavLink to={"#"} className="fa fa-rss" ></NavLink></li>
                                                <li><NavLink to={"#"} className="fa fa-youtube"></NavLink></li>
                                                <li><NavLink to={"#"} className="fa fa-instagram" ></NavLink></li>
                                            </ul>
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
            </>
        );
    }
};

export default BlogList;