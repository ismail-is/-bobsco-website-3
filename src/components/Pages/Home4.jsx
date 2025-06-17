import React from 'react';
import Header4 from './../Common/Header4';
import Footer from './../Common/Footer';
import Slider4 from '../Elements/Slider4';
import About3 from '../Elements/About3';
import Specialization3 from '../Elements/Specialization3';
import OurValue2 from '../Elements/OurValue2';
import OurProject4 from '../Elements/OurProject4';
import OurServices4 from '../Elements/OurServices4';
import OurValue3 from '../Elements/OurValue3';
import Team2 from '../Elements/Team2';
import Blogs2 from '../Elements/Blogs2';
import Faq from '../Elements/Faq';

class Home4 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                <div className="page-content">
                    <Slider4 />
                    <About3 />
                    <Specialization3 />
                    <OurValue2 />
                    <OurProject4 />
                    <OurServices4 />
                    <OurValue3 />
                    <Team2 />
                    <Blogs2 />
                    <Faq />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home4;