import React, { useContext } from "react";
import img from "../assets/novely-book.webp";
import { AppContext } from "../Context/appContext";
import NovelyBook from "../ui/novely-book";
import { useParams } from "react-router-dom";

const SelectedBook = () => {
  const { books } = useContext(AppContext);

  const { id } = useParams();

  const selectedBook = books.find((book) => book.id === Number(id));
  return (
    <>
      <section id="selected">
        <div className="container">
          <div className="row selected__row">
            <h1 className="selected__title">{`{ ${selectedBook?.title} }`}</h1>
            <div className="selected__img__wrapper">
              <img src={selectedBook?.image} alt="" className="selected__img" />
            </div>
            <p className="selected__info selected-info-1">
              {selectedBook?.subtitle}
            </p>
            <p className="selected__info selected-info-2">
              Author: {selectedBook?.authors[0].name}
            </p>
            <div className="line--break"></div>
            <h2 className="suggestions__title">Still turning pages?</h2>
            <h6 className="suggestions__title-2">You might enjoy these too.</h6>
            <div className="library-main__books__list">
              {books.slice(0-5).map((books) => {
                if (books.id !== selectedBook.id) {
                  return (
                    <NovelyBook
                      id={books.id}
                      key={books.id}
                      image={books.image}
                      author={books.authors[0].name}
                      title={books.title}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectedBook;
