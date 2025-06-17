import React from 'react';
import { NavLink } from 'react-router-dom';

class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="mt-bnr-inr " data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + this.props.bgimage + ')' }}>
                        <div className="overlay-main " />
                        <div className="container">
                            <div className="mt-bnr-inr-entry">
                                {/* <div className="banner-title-outer"> */}
                                    <div className="banner-title-name">
                                    <h2
  className="m-b0"
  style={{
    color: "white",
    fontWeight: "900",
    fontSize: "30px",
    position: "relative",
    marginTop: "10px",
  }}
>
  {this.props.title}
  <span
    style={{
      position: "absolute",
      bottom: "-5px", // Adjust as needed to position the line correctly
      left: "50%",
      transform: "translateX(-50%)", // Center the underline
      width: "80px",
      height: "2px", // Thickness of the underline
      backgroundColor: "#E81D21",
    }}
  ></span>
</h2>

                                    </div>
                                {/* </div> */}
                                {/* BREADCRUMB ROW */}
                                {/* <div>
                                    <ul className="mt-breadcrumb breadcrumb-style-2">
                                        <li><NavLink to={"./"}>Home</NavLink></li>
                                        <li>{this.props.pagename}</li>
                                    </ul>
                                </div> */}
                                {/* BREADCRUMB ROW END */}
                            </div>
                        </div>
                    </div>    
            </>
        );
    }
};

export default Banner;