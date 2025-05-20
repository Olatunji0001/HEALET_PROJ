import { FaArrowRight } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoTwitter } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

export default function Footer () {
    return(
        <>
        <section className="bg">

            <div className="footer">
                <div className="footer1">
                    <div className="footer-input">
                        <div><input type="email" placeholder="Enter your email"/></div>
                        <div><button className="footer-input button"><FaArrowRight /></button></div>
                    </div>
                    <div className="footer-link">
                        <button><TiSocialFacebook /></button>
                        <button><BiLogoTwitter /></button>
                        <button><FaLinkedinIn /></button>
                    </div>
                </div>


                <div className="footer2">
                    <div className="footer-menu">
                        <h1 className="footer-head1">Menu</h1>
                        <p>Home</p>
                        <p>About</p>
                        <p>Shop</p>
                        <p>Blog</p>
                    </div>
                    <div className="mr-12">
                        <h1 className="footer-head2">Instagram</h1>
                        <div className="img-holder">
                            <div className="footer-img">
                                <img src="p1.png" alt="img" />
                            </div>
                            <div>
                                <p>long established fact that a reader</p>
                            </div>
                        </div>
                        <div className="img-holder">
                            <div className="footer-img">
                                <img src="p2.png" alt="img" />
                            </div>
                            <div>
                                <p>long established fact that a reader</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-about">
                        <h1 className="footer-head3">About us </h1>
                        <p className="footer-aboutp">when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                    </div>

                    <div className="footer-contact">
                        <h1 className="footer-head4">Contact us</h1>
                        <div className="flex2">
                            <div className="icon"><MdLocationPin /></div>
                            <div className="flex-text">Location</div>
                        </div>
                         <div className="flex2">
                            <div className="icon"><MdCall /></div>
                            <div className="flex-text">Location</div>
                        </div>
                         <div className="flex2">
                            <div className="icon"><MdOutlineMail /></div>
                            <div className="flex-text">Location</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <div className="last">
            <div>
                <p>
                    © 2025 All Rights Reserved By Free Html Templates
                </p>
            </div>
        </div>
        </>
    )
}