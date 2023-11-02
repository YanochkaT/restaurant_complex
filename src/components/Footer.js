import React from "react";
import '../css/index.css'; // Import the CSS file


function Footer() {
  return (
    <footer>

    <div className="footer_bottom_box">
      <div className="footer_top_box">
  
      <div className="left_container">
        <p className="footer_text">Адреса закладу: </p>
        <p className="footer_text">Пошта:</p>
        <p className="footer_text">номери: </p>
      </div>


      <div className="right_container"> 
      <button className="subscribe_button"><p className="button_text">Підпишіться у наші соціальні мережі!</p></button>
      </div>

      </div>
    </div>

    <div className="footer_line"></div>

    </footer>
    );
  }

export default Footer;