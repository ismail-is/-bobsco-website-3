import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },

];

const projects = [
    {
        image: require('./../../images/services/service-projects/shooping-mall.jpg'),
        title: 'Shopping Mall',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/services/service-projects/hospital.jpg'),
        title: 'Hospital Building',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/services/service-projects/garden-house.jpg'),
        title: 'Garden House',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/services/service-projects/villa.jpg'),
        title: 'Villa',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/services/service-projects/road-construction.jpg'),
        title: 'Road Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/services/service-projects/bridge.jpg'),
        title: 'Bridge Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/services/service-projects/building-ren.jpg'),
        title: 'Building Renovation',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/services/service-projects/dam-construction.jpg'),
        title: 'Dam Construction',
        address: 'Muscat, Sultanate of Oman',
        filter: 'cat-2'
    },
]

var img1 = require('./../../images/background/bg5.jpg');

class OurProject3 extends React.Component {
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
                <div className="section-full p-t80 p-b50 bg-parallax bg-cover mobile-page-padding" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Project</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* PAGINATION START */}
                        <div className="filter-wrap p-b15 center">
                            <ul className="masonry-filter link-style  text-uppercase white">
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
                                <div key={index} className={`${item.filter} masonry-item col-md-3 col-sm-6 m-b30`}>
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
                        {/* GALLERY CONTENT END */}
                    </div>
                </div>
            </>
        );
    }
};

export default OurProject3;