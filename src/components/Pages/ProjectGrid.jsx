import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/2.jpg');

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },
    
];

const projects = [
    {
        thumb: require('./../../images/projects/portrait/pic1.jpg'),
        image: require('./../../images/projects/portrait/pic4.jpg'),
        title: 'Life style building',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-1'
    },
    {
        thumb: require('./../../images/projects/portrait/pic2.jpg'),
        image: require('./../../images/projects/portrait/pic9.jpg'),
        title: 'Central City Building',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-2'
    },
    {
        thumb: require('./../../images/projects/portrait/pic3.jpg'),
        image: require('./../../images/projects/portrait/pic6.jpg'),
        title: 'Nathan Brooke House',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-3'
    },
    {
        thumb: require('./../../images/projects/portrait/pic4.jpg'),
        image: require('./../../images/projects/portrait/pic5.jpg'),
        title: 'Metropolitan Museum',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-4'
    },
    {
        thumb: require('./../../images/projects/portrait/pic5.jpg'),
        image: require('./../../images/projects/portrait/pic7.jpg'),
        title: 'Art Family Residence',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-5'
    },
    {
        thumb: require('./../../images/projects/portrait/pic6.jpg'),
        image: require('./../../images/projects/portrait/pic8.jpg'),
        title: 'Office Partition Walls',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-4'
    },
    {
        thumb: require('./../../images/projects/portrait/pic7.jpg'),
        image: require('./../../images/projects/portrait/pic10.jpg'),
        title: 'Glass Office Screen',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-3'
    },
    {
        thumb: require('./../../images/projects/portrait/pic8.jpg'),
        image: require('./../../images/projects/portrait/pic1.jpg'),
        title: 'State Hermitage Museum',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-2'
    },
    {
        thumb: require('./../../images/projects/portrait/pic9.jpg'),
        image: require('./../../images/projects/portrait/pic5.jpg'),
        title: 'Central Florida University',
        description: `We are so busy watching out for what's just ahead of us that we don't take the time to enjoy where we are.`,
        filter: 'cat-1'
    }
]

class ProjectGrid extends React.Component {
    
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
                <Banner title="Always dedicated and devoted" pagename="Project Grid" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
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
                                    <div key={index} className={`${item.filter} masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-two hover-shadow">
                                            <img src={item.thumb} alt="" />
                                            <div className="figcaption">
                                                <h4 className="mt-tilte">{item.title}</h4>
                                                <p>{item.description}</p>
                                                <NavLink to="/project-detail" className="read-more site-button btn-effect">Read More</NavLink>
                                                <a className="mfp-link" href={item.image}>
                                                    <i className="fa fa-arrows-alt" />
                                                </a>
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
                    </div>
                    {/* SECTION CONTENT END  */}
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectGrid;