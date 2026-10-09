import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NovelyHero = () => {
  return (
    <section id="novely-hero">
      <div className="novely-logo">
        <FontAwesomeIcon icon={faBookmark} className="novely-logo-icon" />{" "}
        Novely
      </div>
      <div className="container">
        <div className="row novely-hero__row">
          <h1 className="novely-hero__title">Novely</h1>
          <p className="novely-hero__para">
            Discover your next favorite story.
          </p>
          <Link to="/library" className="novely-hero__btn">
            {"{  Explore Library  }"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NovelyHero;
