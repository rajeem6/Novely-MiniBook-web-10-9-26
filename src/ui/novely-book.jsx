import React from "react";
import novely_book_img from "../assets/novely-book.webp";
import { Link } from "react-router-dom";

const NovelyBook = ({ id, image, author, title }) => {
  return (
    <div id="novely-book">
      <img src={image} alt="" className="novely-book-img" />
      <div className="novely-book-details">
        <h1 className="book-title">{title}</h1>
        <span className="book-author">Author: {author}</span>
        <Link to={`/selected/${id}`} className="novely-book-btn">{`{ View }`}</Link>
      </div>
    </div>
  );
};

export default NovelyBook;
