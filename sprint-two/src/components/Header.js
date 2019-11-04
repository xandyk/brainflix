import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg';
import profile from '../assets/Images/Mohan-muruge.jpg';
import search from '../assets/Icons/SVG/Icon-search.svg';


export default function Header() {
    return (
      <header className="header__container">
        <img className="header__logo" src={logo} alt="brainflix-logo" />
        <div className="header__search-content">
            <input
              className="header__search-bar"
              type="text"
              plasceholder="search"
              value="Search"
            ></input>
            <img className="header__search-icon" src={search} alt="search-icon" />
          <div className="header__wrap-search">
            <button className="header__upload-btn">+ UPLOAD</button>
            <img src={profile} className="header__avatar-img" alt="avatar" />
          </div>
        </div>
      </header>
    );
}


