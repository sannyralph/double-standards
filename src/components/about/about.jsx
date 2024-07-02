import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faXTwitter,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <div className="about-section">
        <section className='our-story'>
          <h3>Our Story</h3>
          <p>Sporton is not just an activewear brand that sells gym wear to it customers; we are a community-driven platform committed to empowering up-and-coming athletes.</p>
        </section>
        <section className='our-mission'>
          <h3>Our Mission</h3>
          <p>Our mission is foster community engagement and collaborate in hosting sport events and partnering with running clubs, tennis clubs, and other sports communities to support and elevate local athletes and sports enthusiasts.</p>
        </section>
        <section className='our-product'>
          <h3>Our Products</h3>
          <p>From Track jackets to sports bras, our products are uniquely designed with you in mind. We use the finest fabrics and the latest technology to ensure you perform at your best.</p>
        </section>
      </div>
      <div className="social-media mt-3 text-center">
            <a
                href="https://www.instagram.com/sporton.eu/"
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
                href="https://www.instagram.com/sporton.eu/"
                className="xtwitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
                href="https://www.instagram.com/sporton.eu/"
                className="tiktok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} />
            </a>
      </div>
    </div>
  );
}

export default AboutUs;