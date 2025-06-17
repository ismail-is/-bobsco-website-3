import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Commercial", filter: ".cat-1" },
    { label: "Education", filter: ".cat-4" },
    { label: "Hospital", filter: ".cat-2" },
    { label: "Residential", filter: ".cat-3" },
    { label: "Office", filter: ".cat-5" },
    { label: "Reconstruction", filter: ".cat-6" }
];

const projects = [
    {
        image: require('./../../images/projects/portrait/pic1.jpg'),
        title: 'Chair Furniture',
        address: 'Muscat, Sultanate of Oman',
        width: 'col-md-3',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic2.jpg'),
        title: 'Furniture',
        address: 'North House',
        width: 'col-md-3',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/projects/portrait/pic3.jpg'),
        title: 'Living room',
        address: 'Aqaba, Jordan',
        width: 'col-md-3',
        filter: 'cat-6'
    },
    {
        image: require('./../../images/projects/portrait/pic4.jpg'),
        title: 'Dream Workspace',
        address: 'Perth, Australia',
        width: 'col-md-3',
        filter: 'cat-6'
    },
    {
        image: require('./../../images/projects/portrait/pic5.jpg'),
        title: 'Decore',
        address: 'Aqaba, Jordan',
        width: 'col-md-3',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/portrait/pic6.jpg'),
        title: 'Modern Decoration',
        address: 'Muscat, Sultanate of Oman',
        width: 'col-md-3',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/projects/portrait/pic7.jpg'),
        title: 'Bathroom',
        address: 'North House',
        width: 'col-md-3',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/projects/pic-l-5.jpg'),
        title: 'Lamp decoration',
        address: 'Aqaba, Jordan',
        width: 'col-md-6',
        filter: 'cat-6'
    },
    {
        image: require('./../../images/projects/pic-1.jpg'),
        title: 'Building house',
        address: 'Ultanate of Oman',
        width: 'col-md-3',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/projects/pic-2.jpg'),
        title: 'Spa residence',
        address: 'Perth, Australia',
        width: 'col-md-3',
        filter: 'cat-4'
    }
]

class OurProject extends React.Component {
    
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
                <div className="section-full mobile-page-padding p-t80 p-b30 square_shape2 ">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Project</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
                                {/* COLUMNS 1 */}
                                <div className="stamp col-md-3 col-sm-6 m-b30">
                                    <div className="bg-gray p-a30">
                                        <div className="filter-wrap">
                                            <ul className="filter-navigation masonry-filter text-uppercase">
                                                <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                                {filters.map((item, index) => (
                                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 2 */}
                                {projects.map((item, index) => (
                                   <div key={index} className={`${item.filter} masonry-item ${item.width} col-sm-6 m-b30`}>
                                        <div className="mt-box   image-hover-block">
                                            <div className="mt-thum-bx">
                                                <img src={item.image} alt=""/>
                                            </div>
                                            <div className="mt-info  p-t20 text-white">
                                                <h4 className="mt-tilte m-b10 m-t0">{item.title}</h4>
                                                <p className="m-b0">{item.address}</p>
                                            </div>
                                            <NavLink to="/project-detail"></NavLink>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
                        <strong>Projects</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default OurProject;