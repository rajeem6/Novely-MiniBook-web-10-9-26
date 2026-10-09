import React, { useContext } from "react";
import NovelyBigBook from "../ui/novely-big-book";
import NovelyBook from "../ui/novely-book";
import { AppContext } from "../Context/appContext";

const LibraryMain = () => {
  const { books } = useContext(AppContext);

  return (
    <section id="library-Main">
      <div className="container">
        <div className="row library-main__row">
          <h1 className="library-main__title">Today's Selection:</h1>
          <div className="library-main__featured">
            {books.slice(3, 6).map((book) => (
              <div key={book.id} className="main--featured--book">
                <NovelyBigBook
                  id={book.id}
                  image={book.image}
                  author={book.authors[0].name}
                  title={book.title}
                />
              </div>
            ))}
          </div>
          <div className="line--break"></div>
          <div className="main--genre--list--wrapper">
            <h2 className="main--genre--title">Pick Your Poison!</h2>
            <div className="main--genre--list">
              <button className="genre--btn">All</button>
              <button className="genre--btn">Fiction</button>
              <button className="genre--btn">Fantasy</button>
              <button className="genre--btn">Mystery</button>
              <button className="genre--btn">Romance</button>
              <button className="genre--btn">Sci-Fi</button>
            </div>
          </div>
          <div className="line--break"></div>
          <p className="library-main__para library-main-para-2">
            "A story is waiting somewhere on these shelves."
          </p>
          <div className="library-main__books__list">
            {books.map((book) => (
              <NovelyBook
                key={book.id}
                id={book.id}
                image={book.image}
                author={book.authors[0].name}
                title={book.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryMain;
