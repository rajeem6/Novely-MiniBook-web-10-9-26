import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NovelyReview = () => {
  return (
    <>
    <section id="novely-review">
        <div className="line--break"></div>
      <div className="container">
        <div className="row novely-review__row">
          <div className="novely-review__forn__heading-1">
            <h3 className="novely-review__title">{`{ Leave a review }`}</h3>
            <p className="novely-review__para">
              "Every library has room for another thought."
            </p>
          </div>
          <div className="novely-review__form">
            <p className="novely-review__forn__heading-2">
              How was your Novely experience?
            </p>
            <form>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <textarea
                name="review"
                className="novely-review__form__review"
                placeholder="..Novely was great; 10/10, will recommend!"
                id=""
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default NovelyReview;
