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
            <NavLink to="/reactProjects" className="header-nav__item">
            React projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/landings" className="header-nav__item">
              Layouts
            </NavLink>
          </li>
          <li>
            <NavLink to="/games" className="header-nav__item">
              JS games
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
              href="https://drive.google.com/file/d/1AEbV0O9yiHaKVD0mYzk1GMCDMhbIO5or/view?usp=sharing">
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
