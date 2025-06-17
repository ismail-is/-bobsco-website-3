import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Shelly Johnson',
        position: 'Business Person',
        review: 'When it comes to your house, don’t mess with the rest, trust the best.'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        reviewername: 'Cuthbert Brain',
        position: 'Contractor',
        review: 'When it comes to your house, don’t mess with the rest, trust the best.'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        reviewername: 'Cathrine Wagner',
        position: 'Builder',
        review: 'When it comes to your house, don’t mess with the rest, trust the best.'
    }
]

class ShortcodesNav extends React.Component {
    render() {
        
        const options = {
            loop:true,
            autoplay:true,
            margin:30,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                991:{
                    items:1
                }
            }
        };
        
        return (
            <>
                <div className="col-md-3 col-sm-4">
                    <div className="hover-navigation bg-white m-b30">
                        <ul>
                                <li><NavLink to={"/accordian"} data-hover="Accordian">Accordian</NavLink></li>
                                <li><NavLink to={"/button"} data-hover="Button">Button</NavLink></li>
                                <li><NavLink to={"/iconboxstyle"} data-hover="Icon box style">Icon box style</NavLink></li>
                                <li><NavLink to={"/listgroup"} data-hover="List Group">List group</NavLink></li>
                                <li><NavLink to={"/modalpopup"} data-hover="Modal popup">Modal popup</NavLink></li>
                                <li><NavLink to={"/tabs"} data-hover="Tabs">Tabs</NavLink></li>
                                <li><NavLink to={"/table"} data-hover="Table">Table</NavLink></li>
                                <li><NavLink to={"/video"} data-hover="Video">Video</NavLink></li>
                                <li><NavLink to={"/iconfont"} data-hover="Icon font">Icon Font</NavLink></li>
                        </ul>
                    </div>
                    <OwlCarousel className="owl-carousel inner-testimonial" {...options}>
                            
                                {testimonials.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="inner-client-says">
                                            <img src={item.image} alt="" className="profile" />
                                            <div className="inner-client-info">
                                                <h4>{item.reviewername} -</h4>
                                                <h6>{item.position}</h6>
                                                <blockquote>{item.review}</blockquote>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>   
                    
                </div>
            </>
        );
    }
};

export default ShortcodesNav;