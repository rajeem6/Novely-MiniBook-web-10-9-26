import React, { useEffect } from "react";
import LibraryHeader from "../components/library-Header";
import LibraryMain from "../components/library-Main";

const Library = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <LibraryHeader />
      <LibraryMain />
    </>
  );
};

export default Library;
