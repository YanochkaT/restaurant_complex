import React from "react";
import '../css/index.css'; // Import the CSS file
import { Link } from 'react-router-dom';


function Header() {
    return(
      <header>
    <div className="header_bottom_box">

    <div className="header_top_box">
      <div className="logo_container">
        <img src="logo.png" alt="Website Logo" />
      </div>

      <ul className="navigation">
        <li><Link to='/main'>Головне Меню</Link></li>
        <li><Link to="/services">Святкові Послуги</Link></li>
        <li><Link to="/about">Про Нас</Link></li>
        <li><Link to="">Оформити Замовлення</Link></li>
      </ul>
     

      <div className="profile_container">
        <button className="button_text">Login</button>
        <img src="" alt=""></img>
      </div>

    </div>

    </div>
    <div className="header_line"></div>
      </header>
    );
  }
  export default Header;
