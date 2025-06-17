import React from 'react';
import Header2 from './../Common/Header2';
import Footer2 from './../Common/Footer2';
import Slider2 from '../Elements/Slider2';
import Services from '../Elements/Services';
import About2 from '../Elements/About2';
import OurValue2 from '../Elements/OurValue2';
import OurMission2 from '../Elements/OurMission2';
import OurServices2 from '../Elements/OurServices2';
import Callus2 from '../Elements/Callus2';
import OurProject2 from '../Elements/OurProject2';
import Team from '../Elements/Team';
import Pricing from '../Elements/Pricing';
import ClientsLogo from '../Elements/ClientsLogo';
import Testimonials2 from '../Elements/Testimonials2';

class Home2 extends React.Component {
    render() {
        return (
            <>
                <Header2 />
                    <div className="page-content">
                        <Slider2 />
                        <Services />
                        <About2 />
                        <OurValue2 />
                        <OurMission2 />
                        <OurServices2 />
                        <Callus2 />
                        <OurProject2 />
                        <Team />
                        <Pricing />
                        <ClientsLogo />
                        <Testimonials2 />
                   </div>
                <Footer2 />

            </>
        );
    };
};

export default Home2;