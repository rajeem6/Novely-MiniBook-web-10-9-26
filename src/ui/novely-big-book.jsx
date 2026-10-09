import React from "react";
import novely_book_img from "../assets/novely-book.webp";
import { Link } from "react-router-dom";

const NovelyBigBook = ({ id, image, author, title }) => {
  return (
    <div id="novely-bigBook1">
      <img src={image} alt="" className="novely-book-img" />
      <div className="novely-book-details">
        <h1 className="book-title">{title}</h1>
        <p className="book-class">Class: Novel</p>
        <span className="book-author">Author: {author}</span>
        <Link
          to={`/selected/${id}`}
          className="novely-book-btn"
        >{`{ View }`}</Link>
      </div>
    </div>
  );
};

export default NovelyBigBook;
