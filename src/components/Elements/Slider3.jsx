import React from 'react';
import { NavLink } from 'react-router-dom';

class Slider3 extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/rev-script-3.js');

    };


    render() {


        return (
            <>
                <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: '#eeeeee', padding: 0 }}>
                    <div id="slider-boxed" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                        <ul>
                            {/* SLIDE 1 */}
                            <li data-index="rs-901" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider3/slide1.jpg')} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={require('./../../images/main-slider/slider3/slide1.jpg')} alt="" data-lazyload={require('./../../images/main-slider/slider3/slide1.jpg')} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                {/* LAYERS */}
                                {/* LAYER NR. 1 [ for overlay ] */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                      {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                      ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                </div>
                                {/* LAYER NR. 4 [ for title ] */}
                                <div className="tp-caption   tp-resizeme" id="slide-901-layer-2" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['240','240','180','200']" data-fontsize="['72','72','62','52']" data-lineheight="['82','82','72','62']" data-width="['700','700','700','500']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+790&quot;,&quot;speed&quot;:1500,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>
                                    <div>We Build Your Dream</div>
                                </div>
                                {/* LAYER NR. 5 [ for block] */}
                                {/* LAYER NR. 5 [ for block] */}
                                <div className="tp-caption   tp-resizeme" id="slide-901-layer-4" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['410','410','350','340']" data-fontsize="['20','20','28','26']" data-lineheight="['28','28','48','38']" data-width="['600','600','700','500']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+790&quot;,&quot;speed&quot;:1500,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 500, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                    It is a long established fact that a reader will be distracted by the readable content.
            </div>
                                {/* LAYER NR. 6 [ for see all service botton ] */}
                                <div className="tp-caption tp-resizeme" id="slide-901-layer-5" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['500','520','540','480']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                      {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                      ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase' }}>
                                    <NavLink to="/about" className="site-button btn-effect">More About</NavLink>
                                </div>
                            </li>
                            {/* SLIDE 2 */}
                            <li data-index="rs-902" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider3/slide2.jpg')} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={require('./../../images/main-slider/slider3/slide2.jpg')} alt="" data-lazyload={require('./../../images/main-slider/slider3/slide2.jpg')} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                {/* LAYERS */}
                                {/* LAYER NR. 1 [ for overlay ] */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                      {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                      ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                </div>
                                {/* LAYER NR. 4 [ for title ] */}
                                <div className="tp-caption   tp-resizeme" id="slide-902-layer-2" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['240','240','180','200']" data-fontsize="['72','72','62','52']" data-lineheight="['82','82','72','62']" data-width="['700','700','700','500']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+790&quot;,&quot;speed&quot;:1500,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>
                                    <div>From concept to creation.</div>
                                </div>
                                {/* LAYER NR. 5 [ for block] */}
                                <div className="tp-caption   tp-resizeme" id="slide-902-layer-4" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['410','410','350','340']" data-fontsize="['20','20','28','26']" data-lineheight="['28','28','48','38']" data-width="['600','600','700','500']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+790&quot;,&quot;speed&quot;:1500,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 500, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                    It is a long established fact that a reader will be distracted by the readable content.
            </div>
                                {/* LAYER NR. 6 [ for see all service botton ] */}
                                <div className="tp-caption tp-resizeme" id="slide-902-layer-5" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['500','520','540','480']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                      {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                      ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase' }}>
                                    <NavLink to="/about" className="site-button btn-effect">More About</NavLink>
                                </div>
                            </li>
                            {/* SLIDE 3*/}
                            <li data-index="rs-903" data-transition="fade" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider3/slide3.jpg')} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={require('./../../images/main-slider/slider3/slide3.jpg')} alt="" data-lazyload={require('./../../images/main-slider/slider3/slide3.jpg')} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                {/* LAYERS */}
                                {/* LAYER NR. 1 [ for overlay ] */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-903-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                      {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                      ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                </div>
                                {/* LAYER NR. 4 [ for title ] */}
                                <div className="tp-caption   tp-resizeme" id="slide-903-layer-2" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['240','240','180','200']" data-fontsize="['72','72','62','52']" data-lineheight="['82','82','72','62']" data-width="['700','700','700','500']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+790&quot;,&quot;speed&quot;:1500,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 700, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif', textTransform: 'uppercase' }}>
                                    <div>Making dreams come to life</div>
                                </div>
                                {/* LAYER NR. 5 [ for block] */}
                                <div className="tp-caption   tp-resizeme" id="slide-903-layer-4" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['410','410','350','340']" data-fontsize="['20','20','28','26']" data-lineheight="['28','28','48','38']" data-width="['600','600','700','500']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+790&quot;,&quot;speed&quot;:1500,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 500, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                    It is a long established fact that a reader will be distracted by the readable content.
            </div>
                                {/* LAYER NR. 6 [ for see all service botton ] */}
                                <div className="tp-caption tp-resizeme" id="slide-903-layer-5" data-x="['left','left','left','left']" data-hoffset="['50','130','130','130']" data-y="['top','top','top','top']" data-voffset="['500','520','540','480']" data-lineheight="['none','none','none','none']" data-width="['300','300','300','300']" data-height="['none','none','none','none']" data-whitespace="['normal','normal','normal','normal']" data-type="text" data-responsive_offset="on" data-frames="[ 
                      {&quot;from&quot;:&quot;y:100px(R);opacity:0;&quot;,&quot;speed&quot;:2000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:2000,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}
                      ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 100, textTransform: 'uppercase' }}>
                                    <NavLink to="/about" className="site-button btn-effect">More About</NavLink>
                                </div>
                            </li>
                        </ul>
                        <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                    </div>
                </div>
            </>
        );
    }
};

export default Slider3;