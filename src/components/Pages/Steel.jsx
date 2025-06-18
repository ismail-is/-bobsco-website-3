import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About4 from './../Elements/About4';
import Specialization4 from './../Elements/Specialization4';
import Team3 from './../Elements/Team3';
import AboutSummary from './../Elements/AboutSummary';
import OurValue3 from '../Elements/OurValue3';
import OurStory from '../Elements/OurStory';
import AboutCompany from '../Elements/AboutCompany';
import Aboutcopy from '../Elements/Aboutcopy';
import Engineering from '../Elements/Engineering';
import Renewable from '../Elements/Renewable';
import CoatingPage from '../Elements/CoatingPage';
import SteelPage from '../Elements/SteelPage';

var bnrimg = require('./../../images/All manpower img/Services.webp');

class Steel  extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Steel Structure Fabrication Services" pagename="About Us" bgimage={bnrimg}/>
                    {/* <Engineering/> */}
                    <SteelPage/>
                    {/* <OurStory/> */}

                </div>

                <Footer />

            </>
        );
    };
};

export default Steel;