import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Importing the icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row g-5">
          {/* Column 1: Brand */}
          <div className="col-lg-4">
            <h3 className="fw-bold mb-3">The Demazong<span className="text-demazong">.</span></h3>
            <p className="text-white-50 small" style={{ lineHeight: '1.8' }}>
              We are an independent media house focusing on Regional Politics, Society, and Policy. 
              Bringing the voice of the youth to the forefront of the conversation.
            </p>
            
            {/* Social Media Icons */}
            <div className="d-flex gap-3 mt-4">
               <a href="#" className="text-white text-decoration-none">
                 <div className="social-icon-circle bg-secondary d-flex align-items-center justify-content-center rounded-circle" style={{width:'40px', height:'40px', transition: 'all 0.3s'}}>
                   <FaFacebookF size={20} />
                 </div>
               </a>
               <a href="#" className="text-white text-decoration-none">
                 <div className="social-icon-circle bg-secondary d-flex align-items-center justify-content-center rounded-circle" style={{width:'40px', height:'40px', transition: 'all 0.3s'}}>
                   <FaInstagram size={20} />
                 </div>
               </a>
               <a href="#" className="text-white text-decoration-none">
                 <div className="social-icon-circle bg-secondary d-flex align-items-center justify-content-center rounded-circle" style={{width:'40px', height:'40px', transition: 'all 0.3s'}}>
                   <FaYoutube size={20} />
                 </div>
               </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold text-demazong mb-3">SECTIONS</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#" className="text-white-50 text-decoration-none hover-white">Politics</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white">Society</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white">Policy</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white">Opinion</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="col-6 col-lg-2">
            <h6 className="fw-bold text-demazong mb-3">COMPANY</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="/about" className="text-white-50 text-decoration-none hover-white">About Us</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white">Careers</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white">Advertise</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none hover-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-lg-4">
            <h6 className="fw-bold text-demazong mb-3">STAY UPDATED</h6>
            <p className="small text-white-50">Get the top stories in your inbox every morning.</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control border-0" placeholder="Your email address" />
              <button className="btn btn-demazong" type="button">Join</button>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary mt-5 pt-4 text-center">
          <p className="small text-secondary mb-0">© 2026 The Demazong Media Group. All rights reserved.</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;