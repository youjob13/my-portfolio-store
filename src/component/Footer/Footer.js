import React from "react";
import styles from "./footer.module.scss";
import img from "../../assets/img/logo.jpg";
import youtube from "../../assets/img/footer/you-tube.png";
import instagram from "../../assets/img/footer/instagram.png";
import twitter from "../../assets/img/footer/twitter.png";
import facebook from "../../assets/img/footer/facebook.png";
import pinterest from "../../assets/img/footer/pinterest.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerNav}>
        <div className={styles.footerNavLogo}>
          <img src={img} />
        </div>
        <nav>
          <ul>
            <li>Footwear</li>
            <li>clothing</li>
            <li>accessories</li>
            <li>brands</li>
            <li>clearance</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Store Locator</li>
            <li>Press Room</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>Website Terms</li>
            <li>Select Country</li>
            <li>Source Code</li>
          </ul>
        </nav>
        <div className={styles.socialNetwork}>
          <div className={styles.socialNetworkLink}>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
          <div>
            <input
              className="input"
              type="text"
              placeholder="Subscribe our newsletter..."
            />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>Copyright © 2015 Bree Orthonormai. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
