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
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="header-nav__item"
              href="https://drive.google.com/file/d/1UOfVZzoKabl1hJDCStFN1OR7HEhe0i7W/view?usp=sharing">
              CV
            </a>
          </li>
          <li>
            <ul className="header-nav__socials">
              <li className="header-nav__item">
                <a href="https://vk.com/bahnempopivku">VK</a>
              </li>
              <li className="header-nav__item">
                <a href="https://t.me/krispriimak">TG</a>
              </li>
              <li className="header-nav__item">
                <a href="https://career.habr.com/krispriimak">HABR</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
