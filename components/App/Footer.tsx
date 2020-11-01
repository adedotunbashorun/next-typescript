import React, { useEffect} from "react";
import Link from 'next/link';
function FooterComponent() {

    return (
        <>
        <footer className="footer mt-4">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-widget footer-about widget">
                            <div className="logo">
                                <div className="img-logo">
                                    <a className="logo" href="index.html">
                                        <img className="img-responsive" src="" alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="footer-widget-about-description">
                                <p></p>
                            </div>
                            <div className="social">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="linkedin" href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a className="pinterest" href="#" target="_blank"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a className="instagram" href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-widget f-link widget">
                            <h3 className="widget-title">Company</h3>
                            <ul className=" list-unstyled">
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Our Services</Link></li>
                                <li><Link href="#">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="single-widget footer_contact widget">
                            <h3 className="widget-title">Contact</h3>
                            <p>Beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem</p>
                            <ul className="address-widget-list">
                                <li className="footer-mobile-number"><i className="fa fa-phone"></i></li>
                                <li className="footer-mobile-number"><i className="fa fa-envelope"></i></li>
                                <li className="footer-mobile-number"><i className="fa fa-map-marker"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                        <div className="footer-newsletter">
                            <form action="#" method="post" className="newsletter-area">
                                <input type="email" placeholder="Your email address" />
                                <button type="submit">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="copyright-content">
                            <p>© Copyright <a href="#" className="text-white"></a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</footer>
        </>
    );
}

export default FooterComponent;
