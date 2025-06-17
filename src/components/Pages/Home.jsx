import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import Specialization from './../Elements/Specialization';
import About from './../Elements/About';
import OurValue from './../Elements/OurValue';
import OurMission from './../Elements/OurMission';
import OurServices from './../Elements/OurServices';
import Callus from './../Elements/Callus';
import OurProject from './../Elements/OurProject';
import Blogs from './../Elements/Blogs';
import Testimonials from './../Elements/Testimonials';
import Slider2 from '../Elements/Slider2';
import ProjectCarousel from './ProjectCarousel';
import OurValue2 from '../Elements/OurValue2';
import Specialization3 from '../Elements/Specialization3';
import Clients from '../Elements/Clients';
import OurServices3 from '../Elements/OurServices3';
import ClientsLogo from '../Elements/ClientsLogo';
import About2 from './../Elements/About2';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider2 />
                
                    {/* <Slider/> */}
                    <OurValue2/>
                    <About2/>
                    <Specialization3/>
                    <ProjectCarousel/>
                    {/* <Specialization3/> */}
                    <br/>
                    {/* <Specialization /> */}
                    {/* <About /> */}
                    {/* <OurValue /> */}
                    {/* <OurMission /> */}
                    {/* <OurServices /> */}
                    {/* <Callus /> */}
                    {/* <OurProject /> */}
                    {/* <Blogs /> */}
                    {/* <Testimonials /> */}
                    <ClientsLogo/>
                    {/* <Clients/> */}
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;