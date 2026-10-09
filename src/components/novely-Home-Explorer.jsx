import React, { useContext } from "react";
import NovelyBook from "../ui/novely-book";
import NovelyBigBook from "../ui/novely-big-book";
import { AppContext } from "../Context/appContext";
import { Link } from "react-router-dom";

const NovelyHomeExplorer = () => {
  const { books } = useContext(AppContext);

  return (
    <>
      <section id="novely-Explorer">
        <div className="genre__list">
          <h1>Popular Genres:</h1>
          <span>Fantasy</span>
          <span>Romance</span>
          <span>Mystery</span>
          <span>Horror</span>
          <span>Sci-Fi</span>
          <span>Thriller</span>
          <span>Historical</span>
        </div>
        <div className="container">
          <div className="row novely-Explorer__row">
            <h2 className="novely-Explorer__title">{`{ Pick Your Novel }`}</h2>
           <p className="novely-Explorer__para">
            Straight out of our mini, Novely, library; featuring Novely picks...
           </p>
            <span className="novely--featuring">Novely, featuring:</span>
            <div className="novely-Explorer__featured">
              <div className="featured--book">
                {books.slice(3, 4).map((book) => (
                  <NovelyBigBook
                    id={book.id}
                    key={book.id}
                    image={book.image}
                    author={book.authors[0].name}
                    title={book.title}
                  />
                ))}
              </div>
              <div className="featured--book--info">
                <h1 className="featured--book--title">{books[3]?.title}</h1>
                <p className="featured--book--info">Class: Novel</p>
                <p className="featured--book--info">
                  Author: {books[3]?.authors[0].name}
                </p>
                <Link to="/library" className="featured--book--btn">
                  Explore More
                </Link>
              </div>
            </div>
            <div className="line--break lb--explorer"></div>
            <span className="novely--featuring">Top Picks:</span>
            <div className="novely-Explorer__books__list">
              {books.slice(0, 3).map((book) => (
                <NovelyBook
                  id={book.id}
                  key={book.id}
                  image={book.image}
                  author={book.authors[0].name}
                  title={book.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NovelyHomeExplorer;
