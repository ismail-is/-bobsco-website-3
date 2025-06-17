import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../images/our-team4/pic1.png'),
        membername: 'Avie Beaton',
        position: 'Ceo & Architect'
    },
    {
        image: require('./../../images/our-team4/pic2.png'),
        membername: 'Ben Jonson',
        position: 'Architect'
    },
    {
        image: require('./../../images/our-team4/pic3.png'),
        membername: 'Ashley Fletcher',
        position: 'Finances'
    }
]

class Team2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Team</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* IMAGE Team START */}
                        <div className="section-content">
                            <div className="row">
                                {teamMembers.map((item, index) => (
                                    <div key={index} className="col-md-4 col-sm-6 col-xs-6 col-xs-100pc m-b30   ">
                                        <div className="our-team-1 hover-animation-1">
                                            <div className="profile-image scale-in-center"><img src={item.image} alt=""/></div>
                                            <div className="figcaption">
                                                <h4>{item.membername}</h4>
                                                <h5>{item.position}</h5>
                                                <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
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

export default Team2;