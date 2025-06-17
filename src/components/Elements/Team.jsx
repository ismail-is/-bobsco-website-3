import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../images/our-team5/pic4.png'),
        membername: 'Avie Beaton',
        position: 'Ceo & Architect'
    },
    {
        image: require('./../../images/our-team5/pic3.png'),
        membername: 'Ben Jonson',
        position: 'Architect'
    },
    {
        image: require('./../../images/our-team5/pic2.png'),
        membername: 'Ashley Fletcher',
        position: 'Finances'
    },
    {
        image: require('./../../images/our-team5/pic5.png'),
        membername: 'Gabriela Flores',
        position: 'Mechanical Engineer'
    }
]

var bnr1 = require('./../../images/background/bg5.jpg');

class Team extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 square_shape1 bg-parallax bg-cover mobile-page-padding" data-stellar-background-ratio="0.5" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head text-center text-white ">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our </span> Team</h2>
                                </div>
                            </div>
                            <h2>Discover trust team and our experts</h2>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                {teamMembers.map((item, index) => (
                                    <div key={index} className="col-md-3 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">
                                        <div className="our-team-2 ">
                                            <div className="profile-image scale-in-center"><img src={item.image} alt="" /></div>
                                            <div className="figcaption text-black">
                                                <h4>{item.membername}</h4>
                                                <h5>{item.position}</h5>
                                                <div className="icons">
                                                    <NavLink to={"#"} ><i className="fa fa-facebook" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-twitter" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-instagram" /></NavLink>
                                                    <NavLink to={"#"} ><i className="fa fa-rss" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-youtube" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-linkedin" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Team;