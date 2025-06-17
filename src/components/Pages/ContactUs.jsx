import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import GoogleMapReact from 'google-map-react';
// import ConatctApi from './ConatctApi';

var bnrimg = require('./../../images/allimg/Contactbanner3.webp');

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = this.state;

        // fetch('https://sheet.best/api/sheets/6d41549c-f639-41ae-87a2-056232507eb4', {
        fetch('https://sheet.best/api/sheets/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            this.setState({ name: '', email: '', message: '' });
        })
        .catch(error => {
            alert('Error sending message!');
            console.error('Error:', error);
        });
    }

    render() {
        const defaultProps = {
            center: {
              lat: 34.073280,
              lng: -118.251410
            },
            zoom: 12
        };

        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Contact Us" pagename="Contact Us" bgimage={bnrimg}/>
                    {/* <ConatctApi/> */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <form className="contact-form cons-contact-form" onSubmit={this.handleSubmit}>
                                            <div className="contact-one m-b30">
                                                <div className="section-head">
                                                    <div className="mt-separator-outer separator-left">
                                                        <h4> Have Questions?</h4>
                                                        <div className="mt-separator">
                                                            <h2 className="text-uppercase sep-line-one">
                                                                <span className="font-weight-300 text-primary">Send us a </span>Message
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <input name="name" type="text" value={this.state.name} onChange={this.handleChange} required className="form-control" placeholder="Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required className="form-control" placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} value={this.state.message} onChange={this.handleChange} className="form-control" required placeholder="Message"></textarea>
                                                </div>
                                                <div className="text-right">
                                                    <button type="submit" className="site-button btn-effect">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="contact-info m-b30">
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one">
                                                            <span className="font-weight-300 text-primary">Contact</span> Info
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-dark p-a20 text-white">
                                            <div className="mt-icon-box-wraper left p-b40">
                                            <div className="icon-xs"><i className="fa fa-phone" style={{color:"#E81D21"}} /></div>
                                             <div className="icon-content">
                                              <h5 className="m-t0 font-weight-500">Phone</h5>
                                              <a href="tel:+" style={{color:'white'}}>+9665 0000 1111</a><br/>
                                              <a href="tel:+" style={{color:'white'}}>+9665 0000 1111</a>
                                              {/* <a href="tel:+966500367643" style={{color:'white'}}>+9665 0036 7643</a> */}
                                              </div>
                                             </div>
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-envelope" style={{color:"#E81D21"}} /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Email address</h5>
                                                        <a href="#" style={{color:'white'}}>info@demo.com
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" style={{color:"#E81D21"}} /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Address info</h5>
                                                        <p>address</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gmap-outline">
                                <div style={{ height: '400px', width: '100%' }}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3554.656407692387!2d49.6523611!3d27.0094167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDAwJzMzLjkiTiA0OcKwMzknMDguNSJF!5e0!3m2!1sen!2sin!4v1725463811127!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default ContactUs;
