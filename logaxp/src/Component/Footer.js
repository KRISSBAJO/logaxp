import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../assets/images/nlogo.png";
;


const Footer = () => {
    return (
        <>
        <div className="bg-custom-light">
            <div className="py-6 px-8">
                <div className="mb-8">
                    <div className="mb-4 flex space-x-4">
                        <p className='font-bold text-gray-50 mb-4 '>Follow Us</p>
                        <Link to="instagram" className="text-purple-800 hover:text-gray-600">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </Link>
                        <Link to="twitter" className="text-blue-500 hover:text-gray-600">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </Link>
                        <Link to="/youtube" className="text-red-500 hover:text-red-600">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </Link>
                        <Link to="/facebook" className="text-blue-500 hover:text-gray-600">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </Link>
                        <Link to="linkedin" className="text-blue-500 hover:text-gray-600">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </Link>
                    </div>
                </div>

              </div>
        </div>
        <div className="border-t pt-1">
        <div className="bg-custom-dark py-4"> 
                        <div className="mb-4 flex justify-center items-center">
                            <span className="text-gray-50"> ➡️ EN | ES</span>
                        </div>
                    </div>
                </div>
            

            <div className="flex justify-between items-center  bg-custom-dark">
                <div className='flex justify-center items-center gap-4 mx-auto -mt-3'> 
                    <img src={logo} alt="Logo" className="h-12 w-auto rounded-lg" /> {/* Replace with the path to your logo */}
                </div>
                <div className="flex gap-4 mx-auto">
                    <Link to="/privacy" className="text-gray-50 hover:text-gray-600">Privacy</Link>
                    <Link to="/terms" className="text-gray-50 hover:text-gray-600">Terms</Link>
                    <Link to="about" className="text-gray-50 hover:text-gray-600">About LogaXP</Link>
                    <Link to="/products" className="text-gray-50 hover:text-gray-600">LogaXP Products</Link>
                    <Link to="doc_center" className="text-gray-50 hover:text-gray-600">DocCenter</Link>
                </div>
            </div>

        </>
    );
}

export default Footer;
