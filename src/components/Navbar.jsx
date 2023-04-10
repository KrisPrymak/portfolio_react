import React from "react";
import { NavLink } from "react-router-dom";
import './../style.scss';

const Navbar = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-nav__list">
          <li>
            <NavLink to="/" className="header-nav__item">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="header-nav__item">
            Projects
            </NavLink>
          </li>
          <li>
            <a
              className="header-nav__item"
              href="https://github.com/KrisPrymak"
              target="_blank" rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="header-nav__item"
              target="_blank" rel="noreferrer"
              href="https://drive.google.com/file/d/1TllDZlMYCShC2KIS_rGcXXzdyMn9edlb/view?usp=sharing">
              CV
            </a>
          </li>
          <li>
            <ul className="header-nav__socials">
              <li className="header-nav__item">
                <a href="https://vk.com/bahnempopivku" target="_blank" rel="noreferrer">VK</a>
              </li>
              <li className="header-nav__item">
                <a href="https://t.me/krispriimak" target="_blank" rel="noreferrer">TG</a>
              </li>
              <li className="header-nav__item">
                <a href="https://career.habr.com/krispriimak" target="_blank" rel="noreferrer">HABR</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
