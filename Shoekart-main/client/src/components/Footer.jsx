import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="subscription">
        <div className="subscription-c1">
          <span>Get The Latest Deals And More</span>
          <span>NEW RELEASES,SPECIAL OFFER AND MORE</span>
        </div>
        <div className="subscription-c2">
          <div>
            <input type="email" name="" placeholder="Enter Your Email" id="" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="footer-main">
          <div className="footer-container">
            <div className="sec aboutus">
              <h2>About us</h2>
              <p>
                Our exclusively designed Bridal
                collection by Kahkashan Parween is array of
                beautifully and handcrafted dress that
                will last a lifetime. 
              </p>
              <ul className="footer-social">
                <li>
                  <Link to="https://www.facebook.com/profile.php?id=100048458207943&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link to="https://x.com/wrtyfighter?t=suOHz5p3WnnOZlTmJdk9hA&s=09" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/kahkashan955?igsh=MWVrdXdzM3plaHdwNA==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/@WrtyFighter" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sec quicklinks">
              <h2>Support</h2>
              <ul>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sec quicklinks">
              <h2>Shop</h2>
              <ul>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    Men
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    Women
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    Kids
                  </Link>
                </li>
                <li>
                  <Link to="/" target="_blank" rel="noopener noreferrer">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sec contact">
              <h2>Contact Us</h2>
              <ul className="footer-info">
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>
                    <Link to="tel:+918271965614">+91 8271965614</Link>
                  </p>
                </li>
                <li>
                  <span>
                    <IoIosMail />
                  </span>
                  <p>
                    <Link to="mailto:kahkashan@gmail.">
                      kahkashan@gmail.com
                    </Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyrightText">
            <p>Copyright ©{new Date().getFullYear()} The Bridal Bloom</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
// style="width: 40%;display: flex;"
