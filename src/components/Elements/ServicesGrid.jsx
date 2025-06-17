import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: 1,
        title: `Marketing / Branding  `,
        icon: require('./../../images/allicons/branding.png'),
        image: require('./../../images/allimg/Marketing.webp'),
        description: 'Targefy elevates your brand with precise marketing strategies, ensuring you reach the right audience to drive impactful engagement and sustained business growth',
    },
    {
        count: 2,
        title: `Social Media Management`,
        icon: require('./../../images/allicons/red.png'),
        image: require('./../../images/serviceimg/Socila.webp'),
        description: 'At Targefy, we craft dynamic social media strategies that amplify your brands voice, captivate audiences, and drive impactful engagement across all platforms',
    },
    {
        count: 3,
        title: 'Web development / Optimization ',
        icon: require('./../../images/allicons/webiste creation.png'),
        image: require('./../../images/serviceimg/web.webp'),
        description: 'At Targefy, we design and manage stunning websites that captivate visitors, enhance user experience, and drive your online success with seamless functionality and tailored design.',
    },  
   
    {
        count: 4,
        title: 'Content Creation',
        icon: require('./../../images/allicons/writer.png'),
        image: require('./../../images/serviceimg/Content.webp'),
        description: 'Targefy delivers dynamic content that highlights your brand’s essence, engages your audience, and drives significant interaction across diverse platforms.',
    },   
    {
        count: 5,
        title: 'Email Marketing',
        icon: require('./../../images/allicons/email (2).png'),
        image: require('./../../images/serviceimg/email.webp'),
        description: 'At Targefy, we deliver compelling email marketing campaigns that engage your audience, drive conversions, and build lasting relationships with tailored, strategic messaging.',
    }, 
    {
        count: 6,
        title: 'Paid Search & Media Campaigns',
        icon: require('./../../images/allicons/paid-search.png'),
        image: require('./../../images/serviceimg/Paid.webp'),
        description: 'At Targefy, we create high-impact paid search and media campaigns that drive traffic, maximize ROI, and elevate your brand’s presence with precision.',
    },   
    {
        count: 7,
        title: 'SEO (Search Engine Optimization)',
        icon: require('./../../images/allicons/seo (1).png'),
        image: require('./../../images/serviceimg/SEO.webp'),
        description: 'With Targefy, watch your website climb the search rankings as we deploy advanced SEO techniques to boost visibility and drive targeted, converting traffic.',
    },   
    {
        count: 8,
        title: 'Photography/Videography',
        icon: require('./../../images/allicons/videography.png'),
        image: require('./../../images/allimg/pic.jpg'),
        description: 'Elevate your brand with Targefy’s expert photography and videography, designed to captivate and enhance your online presence.',
    }
      
]

class ServicesGrid extends React.Component {
    render() {
        return (
            <>
                <div className="section-full bg-white slider-half-part" style={{marginTop:'70px'}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                        <div className="section-head">
                            {/* <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Services</h2>
                                </div>
                            </div> */}
                        </div>
                            <div className="row">
                                {services.map((item, index) => (
                                    <div className="col-md-6 col-sm-4 m-b30" key={index}>
                                        <div className="half-blocks">
                                            <div className="mt-icon-box-wraper center m-b30">
                                                <div className="half-block-content icon-count-2 p-a30 p-tb50">
                                                    <span className="icon-count-number">{item.count}</span>
                                                    <div className="mt-icon-box-lg radius bg-gray m-b20 scale-in-center">
                                                        <span className="icon-cell"><img src={item.icon} alt=""/></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h4 className="mt-tilte m-b25">{item.title}</h4>
                                                        <p>{item.description}</p>
                                                        <NavLink to={"/contactus"} className="site-button-link" data-hover="Read More">Contact Us<i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                    </div>
                                                </div>
                                                <div className="bg-cover  half-blocks-bg" style={{ backgroundImage: 'url(' + item.image + ')' }} />
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

export default ServicesGrid;