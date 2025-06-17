import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/1.jpg');

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },
    
];

const projects = [
    {
        thumb: require('./../../images/projects/square/pic4.jpg'),
        image: require('./../../images/projects/square/pic4.jpg'),
        title: 'Stronger communities',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-1'
    },
    {
        thumb: require('./../../images/projects/square/pic3.jpg'),
        image: require('./../../images/projects/square/pic3.jpg'),
        title: 'Concept to creation',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-2'
    },
    {
        thumb: require('./../../images/projects/square/pic6.jpg'),
        image: require('./../../images/projects/square/pic6.jpg'),
        title: 'Safety for life',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-3'
    },
    {
        thumb: require('./../../images/projects/square/pic5.jpg'),
        image: require('./../../images/projects/square/pic5.jpg'),
        title: 'Whatever it takes',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-4'
    },
    {
        thumb: require('./../../images/projects/square/pic7.jpg'),
        image: require('./../../images/projects/square/pic7.jpg'),
        title: 'We build tomorrow',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-5'
    },
    {
        thumb: require('./../../images/projects/square/pic8.jpg'),
        image: require('./../../images/projects/square/pic8.jpg'),
        title: 'The key to our success',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-4'
    },
    {
        thumb: require('./../../images/projects/square/pic2.jpg'),
        image: require('./../../images/projects/square/pic2.jpg'),
        title: 'Rising above',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-3'
    },
    {
        thumb: require('./../../images/projects/square/pic9.jpg'),
        image: require('./../../images/projects/square/pic9.jpg'),
        title: 'From concept to creation',
        description: 'This is ipsum dolor sitamet, consectetur adipisi cing elito, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
        filter: 'cat-2'
    }
]

class ProjectClassic1 extends React.Component {
    
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
                <Banner title="Creating quality urban lifestyles, building stronger communities." pagename="Project Classic View" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 bg-gray inner-page-padding">
                        {/* GALLERY CONTENT START */}
                        <div className="container-fluid">
                            {/* PAGINATION START */}
                            <div className="filter-wrap p-b30 text-center">
                                <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                                    <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                    {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                    ))} 
                                </ul>
                            </div>
                            {/* PAGINATION END */}
                            {/* GALLERY CONTENT START */}
                            <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                                {projects.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-lg-3 col-md-4 col-sm-6 m-b30`}>
                                        <div className="project-classic">
                                            <div className="mt-box ">
                                                <div className="mt-thum-bx  img-center-icon  mt-img-overlay2">
                                                    <img src={item.thumb} alt="" />
                                                    <div className="overlay-bx">
                                                        <div className="overlay-icon">
                                                            <NavLink to={"/project-detail"}>
                                                                <i className="fa fa-external-link mt-icon-box-xs " />
                                                            </NavLink>
                                                            <a className="mfp-link" href={item.image}>
                                                                <i className="fa fa-arrows-alt mt-icon-box-xs" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-info p-t20">
                                                <h4 className="mt-title m-b20 m-t0" data-hover={item.title}>{item.title}</h4>
                                                <p>{item.description}</p>
                                                <NavLink to={"/project-detail"} className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* GALLERY CONTENT END */}
                            <div className="m-t50 text-center">
                                <NavLink to={"#"} className="site-button btn-effect">Load More</NavLink>
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

export default ProjectClassic1;