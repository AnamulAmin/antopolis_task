import React from "react";
import "./footer.css";
import { RiFacebookBoxFill } from "react-icons/ri";
import { ImInstagram } from "react-icons/im";
import { FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <div className="container content">
        <div className="brand_area">
          <a href="#" className="logo">
            Taste now
          </a>
          <div className="social_media">
            <a href="#">
              <RiFacebookBoxFill />
            </a>
            <a href="#">
              <ImInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <ul className="footer_list">
              <li>Seslendirme ve Alt Jazz</li>
              <li>Media Market</li>
              <li>Gillie</li>
              <li>Size Last</li>
            </ul>
          </div>
          <div className="column">
            <ul className="footer_list">
              <li>Self Betimes</li>
              <li>Yatırımcı İlişkileri</li>
              <li>Basal Himmler</li>
            </ul>
          </div>
          <div className="column">
            <ul className="footer_list">
              <li>Yard Market</li>
              <li>Is İmkanları</li>
              <li>Car Tercihleri</li>
            </ul>
          </div>
          <div className="column">
            <ul className="footer_list">
              <li>Hedge Karla</li>
              <li>Mullein Koşulları</li>
              <li>CAutumnal Bulgier</li>
            </ul>
          </div>
        </div>
        <div className="social_media lg_hidden">
          <a href="#">
            <RiFacebookBoxFill />
          </a>
          <a href="#">
            <ImInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
