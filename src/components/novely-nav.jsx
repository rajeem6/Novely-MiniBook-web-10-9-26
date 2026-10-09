import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NovelyNav = () => {
  return (
    <>
      <nav id="novely-nav">
        <div className="container">
          <div className="row novely-nav__row">
            <h1 className="novely-nav__title">"Explore the shelves."</h1>
            <div className="novely-nav__links">
              <Link to="/" className="novely-nav__link">
                Front Cover
              </Link>
              <Link to="/library" className="novely-nav__link">
                Library
              </Link>
              <a href="#novely-review" className="novely-nav__link">
                Leave a Note
              </a>
            </div>
            <footer className="novely-nav__footer">
              <div className="novely-footer__links">
                <a
                  href="https://github.com/rajeem6"
                  target="_blank"
                  className="novely-footer__link"
                >
                  GitHub <FontAwesomeIcon icon={faGithub} />
                </a>
                <p className="novely-footer__credit">Design By Rajeem</p>
                <p className="novely-footer__credit">© 2026 Novely</p>
              </div>
            </footer>
          </div>
        </div>
      </nav>

      <nav id="nav__horizontal">
        <div className="nav__container">
          <div className="novely-logo-2">
            <FontAwesomeIcon icon={faBookmark} className="novely-logo-icon" />{" "}
            Novely
          </div>
          <div className="novely-nav__links-2">
            <Link to="/" className="novely-nav__link">
              Front Cover
            </Link>
            <Link to="/library" className="novely-nav__link">
              Library
            </Link>
            <a href="#novely-review" className="novely-nav__link">
              Leave a Note
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NovelyNav;
