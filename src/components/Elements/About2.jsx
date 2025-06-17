import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
  require('./../../images/gallery/pic8.jpg'),
  require('./../../images/gallery/pic6.jpg'),
  require('./../../images/gallery/pic9.jpg'),
  require('./../../images/gallery/pic2.jpg'),
  require('./../../images/gallery/pic3.jpg'),
];
var img1 = require('./../../images/background/ptn-1.png');
const bnr1 = require('./../../images/background/bg-map.png');

class About2 extends React.Component {
  render() {
    const options = {
      loop: true,
      autoplay: true,
      margin: 30,
      nav: false,
      dots: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        991: { items: 1 },
      },
    };

    /* 🔽 one‑liner to avoid repetition */
    const outline = (size) => ({
      fontSize: size,
      fontWeight: 800,
      color: 'transparent',
      WebkitTextStroke: '1.5px #000',
      display: 'inline-block',
    });

    const plusStyle = { color: 'red', WebkitTextStroke: 0, marginLeft: 4 };

    return (
      <>
        {/* <div className="section-full" style={{ backgroundImage: 'url(' + img1 + ')'}}> */}
             <div className="section-full p-t80 p-b50 bg-white mobile-page-padding" style={{backgroundColor:'white'}}>
          <div className="services-half-section-top">
            <div className="container">{/* … (all your commented markup) … */}</div>
          </div>

          <div className="services-half-section-bottom p-t80 p-b50 bg-secondry bg-cover bg-center bg-no-repeat" style={{ backgroundColor:'white' ,marginTop:'-440px'}}>
            <div className="container">
              <div className="section-content">
                <div className="row">
                  {/* ───────────────────────── 1 ───────────────────────── */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-primary mt-icon-box-wraper left m-b30">
                      {/* <span className="icon-md p-t10">
                        <i className="flaticon-city" />
                      </span> */}
                      <div className="icon-content">
                        <div className="counter m-b5" style={outline(60)}>
                          <CountUp end={45} duration={5} />
                          <span style={plusStyle}>+</span>
                        </div>
                        <span className="font-16" style={{ color: '#000', fontWeight: 600 }}>
                            <br/>
                          Drilling Fields
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ───────────────────────── 2 ───────────────────────── */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-primary mt-icon-box-wraper left m-b30">
                      {/* <span className="icon-md p-t10">
                        <i className="flaticon-worker" />
                      </span> */}
                      <div className="icon-content">
                        <div className="counter m-b5" style={outline(50)}>
                          <CountUp end={8} duration={5} />
                          k<span style={plusStyle}>+</span>
                        </div>
                        <span className="font-16" style={{ color: '#000', fontWeight: 600 }}><br/>
                          Crane Equipments
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ───────────────────────── 3 ───────────────────────── */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-primary mt-icon-box-wraper left m-b30">
                      {/* <span className="icon-md p-t10">
                        <i className="flaticon-crane" />
                      </span> */}
                      <div className="icon-content">
                        <div className="counter m-b5" style={outline(50)}>
                          <CountUp end={2} duration={5} />
                          k<span style={plusStyle}>+</span>
                        </div>
                        <span className="font-16" style={{ color: '#000', fontWeight: 600 }}><br/>
                          Metal Factory
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ───────────────────────── 4 ───────────────────────── */}
                  <div className="col-md-3 col-sm-6">
                    <div className="text-primary mt-icon-box-wraper left m-b0">
                      {/* <span className="icon-md p-t10">
                        <i className="flaticon-art-and-design" />
                      </span> */}
                      <div className="icon-content">
                        <div className="counter m-b5" style={outline(50)}>
                          <CountUp end={6} duration={5} />
                          k<span style={plusStyle}>+</span>
                        </div>
                        <span className="font-16" style={{ color: '#000', fontWeight: 600 }}><br/>
                          Special Machinery
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* ───────────────────────────────────────────────────── */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About2;