import React from "react";
import styles from "./footer.module.scss";
import img from "../../assets/img/logo.jpg";
import Navigation from "../common/Navigation/Navigation";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerNav}>
        <div className={styles.footerNavLogo}>
          <img src={img} />
        </div>
        <Navigation styles={styles} />
        <nav>
          <ul>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Support</a>
            </li>
            <li>
              <a>Store Locator</a>
            </li>
            <li>
              <a>Press Room</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a>Website Terms</a>
            </li>
            <li>
              <a>Select Country</a>
            </li>
            <li>
              <a>Source Code</a>
            </li>
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
