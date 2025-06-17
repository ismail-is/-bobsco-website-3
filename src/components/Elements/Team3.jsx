import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../images/allimg/Nasser.webp'),
        membername: 'M N Siddiqui ',
        position: 'CEO/Co-Founder  '
    },
    {
        image: require('./../../images/allimg/Samra Siddiqui.webp'),
        membername: 'Samra Siddiqui ',
        position: 'COO/Co-Founder '
    },
    {
        image: require('./../../images/allimg/MQSiddiqui.webp'),
        membername: 'M Q Siddiqui',
        position: ' Marketing Consultant '
    }
]

class Team3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">CORE</span> Team</h2>
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
                                            <div className="profile-image scale-in-center"><img src={item.image} alt="" /></div>
                                            <div className="figcaption">
                                                <h4>{item.membername}</h4>
                                                <h5>{item.position}</h5>
                                                {/* <p>Which is worse, that everyone has his price, or that the price is always so low.</p> */}
                                                {/* <div className="icons">
                                                    <NavLink to={"#"} ><i className="fa fa-facebook" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-twitter" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-instagram" /></NavLink>
                                                    <NavLink to={"#"} ><i className="fa fa-rss" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-youtube" /></NavLink>
                                                    <NavLink to={"#"} > <i className="fa fa-linkedin" /></NavLink>
                                                </div> */}
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

export default Team3;