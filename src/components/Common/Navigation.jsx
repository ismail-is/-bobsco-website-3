import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

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

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className={(this.props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                    <ul className="nav navbar-nav">
                        {/* <li className="active">
                            <NavLink to={"/"}>Home</NavLink>
                            <ul className="sub-menu">
                                <li>
                                    <NavLink to={"/"}>Home-1</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/homepage2"}>Home-2</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/homepage3"}>Home-3 boxed style</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/homepage4"}>Home-4</NavLink>
                                </li>
                            </ul>
                        </li> */}
                        <li>
                        <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                        <NavLink to={"/about"}>About us</NavLink>
                        </li>
                        {/* <li>
                        <NavLink to={"/WhyTargefy"}>Why Targefy</NavLink>
                        </li> */}
                        {/* <li>
                        <NavLink to={"/services"}>Services</NavLink>
                        </li> */}
                         <li>
                        <NavLink to={""}>Service</NavLink>
                        
                            <ul className="sub-menu"   style={{
    maxHeight: '500px',   // Adjust as needed
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingRight: '10px'  // Optional: avoids hiding content under scrollbar
    
  }}>
                               
                                  <li><NavLink to={"/Engineering"}>Engineering Design Services</NavLink></li>
                                                                           <li><NavLink to={"/Oil"}>Oil & Gas Energy</NavLink></li>
                                                                           <li><NavLink to={"/Industrial"}>Industrial Construction</NavLink></li>
                                                                           <li><NavLink to={"/Automation"}>Automation Industry</NavLink></li>
                                                                           <li><NavLink to={"/Renewable"}>Renewable energy</NavLink></li>
                                                                           <li><NavLink to={"/Manufacturing"}>Manufacturing</NavLink></li>

                                                                           <li><NavLink to={"/Coating"}>Coating/Painting & Sand blasting</NavLink></li>
                                                                           <li><NavLink to={"/Mechanical"}>Industrial Mechanical & Electrical Works</NavLink></li>
                                                                           <li><NavLink to={"/Refrigeration"}>Refrigeration Services</NavLink></li>
                                                                           <li><NavLink to={"/Equipment"}>Equipment Rental Services</NavLink></li>
                                                                           <li><NavLink to={"/Civil"}>Civil Works</NavLink></li>
                                                                           <li><NavLink to={"/Steel"}>Steel Structure Fabrication Services</NavLink></li>
                                                                           


                                
  
                            </ul>
                        </li> 
                        <li>
                        <NavLink to={"/contactus"}>Contact</NavLink>
                        </li>
                        {/* <li id="visiionlogo" style={{ display: window.innerWidth <= 600 ? 'none' : 'block' }}>
  <img src={require('./../../images/All manpower img/2030 logo.png')} style={{ height: '50px', marginTop: '10px' }} />
</li> */}
                      
                        {/* <li>
                        <NavLink to={""}>Pages</NavLink>
                            <ul className="sub-menu">
                                <li>
                                <NavLink to={""}>Blog</NavLink>
                                    <ul className="sub-menu has-child">
                                        <li><NavLink to={"/blog-grid"}>Blog Grid</NavLink></li>
                                        <li><NavLink to={"/blog-listing"}>Blog Listing</NavLink></li>
                                        <li><NavLink to={"/blog-masonary"}>Blog Masonry</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                <NavLink to={"/faq"}>FAQ</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/error"}>Error 404</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/contactus"}>Contact us</NavLink>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li>
                            <NavLink to={""}>Post detail</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/post-image"}>Post Image</NavLink></li>
                                <li><NavLink to={"/post-gallery"}>Post Gallery</NavLink></li>
                                <li><NavLink to={"/post-video"}>Post Video</NavLink></li>
                                <li><NavLink to={"/post-sidebar"}>Post Right Sidebar</NavLink></li>
                            </ul>
                        </li> */}
                        {/* <li>
                            <NavLink to={""}>Projects</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/project-grid"}>Project Grid</NavLink></li>
                                <li><NavLink to={"/project-masonary"}>Project Masonry</NavLink></li>
                                <li><NavLink to={"/project-carousel"}>Project Carousel</NavLink></li>
                                <li><NavLink to={"/project-classic1"}>Project Classic-1</NavLink></li>
                                <li><NavLink to={"/project-classic2"}>Project Classic-2</NavLink></li>
                                <li><NavLink to={"/project-detail"}>Project Detail</NavLink></li>
                            </ul>
                        </li> */}
                        {/* <li className="submenu-direction">
                            <NavLink to={""}>Shortcodes</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/accordian"}>Accordian</NavLink></li>
                                <li><NavLink to={"/button"}>Button</NavLink></li>
                                <li><NavLink to={"/iconboxstyle"}>Icon box style</NavLink></li>
                                <li><NavLink to={"/listgroup"}>List group</NavLink></li>
                                <li><NavLink to={"/modalpopup"}>Modal popup</NavLink></li>
                                <li><NavLink to={"/tabs"}>Tabs</NavLink></li>
                                <li><NavLink to={"/table"}>Table</NavLink></li>
                                <li><NavLink to={"/video"}>Video</NavLink></li>
                                <li><NavLink to={"/iconfont"}>Icon Font</NavLink></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;