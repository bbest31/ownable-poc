import React from 'react'
import AdopterForm from './AdopterForm/AdopterForm';
import './Footer.css';
import footerImage from '../assets/graphic_footer_img.svg';
import ScrollableAnchor from 'react-scrollable-anchor';

const Footer = () => {
    return (
        <ScrollableAnchor id={'footer-section'}>
            <div className="container-fluid main-bg pb-3">
                <div className="row pt-5">
                    <div className="col-12">
                        <h1 className="main-header">Launching Soon!</h1>
                    </div>
                    <div className="col-12">
                        <h2 className="subheader">Be the first to hear about investment opportunities with Ownable</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2 col-md-3 col-lg-4"></div>
                    <div className="col-sm-8 col-md-6 col-lg-4 pt-3">
                        <AdopterForm />
                    </div>
                    <div className="col-sm-2 col-lg-4 col-md-3"></div>
                </div>
                {/* <div className="row pt-5">
                    <div className="col-12 text-center">
                        <a href="mailto:info@getownable.co" className="contact-email-text"><u>info@getownable.co</u></a>
                    </div>
                </div> */}
                <div className="row align-items-end">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <p className="footnote">Ownable Inc. 2019</p>
                    </div>
                    <div className="col-4">
                        <img className="img-fluid" src={footerImage} alt="[IMG]" />
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}

export default Footer;
