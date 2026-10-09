import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LibraryHeader = () => {
  return (
    <>
      <section id="library-header">
        <div className="container">
          <div className="row library-header__row">
            <h1 className="library-header__title">Library</h1>
            <p className="library-header__para">
              Find something worth getting lost in.
            </p>
            <a className="library-header__pointer">
              <a href="#library-Main">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="library-header__arrow"
                />
              </a>
            </a>
            <div className="line--break"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LibraryHeader;
