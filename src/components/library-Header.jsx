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
            <input
            disabled
              type="text"
              placeholder="Coming Soon..."
              className="library-header__search"
            />
            <div className="line--break"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LibraryHeader;
