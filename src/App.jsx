import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/Library";
import NovelyNav from "./components/novely-nav";
import axios from "axios";
import { AppContext } from "./Context/appContext";
import SelectedBook from "./pages/selectedBook.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState([]);

  async function fetchBookData() {
    const { data } = await axios.get(
      "https://api.bigbookapi.com/search-books?api-key=0be522971ac547bbb865f90b69c45ba5",
    );
    const results = data.books.flat();
    const storedResults = JSON.stringify(results);
    localStorage.setItem("books", storedResults);
    setBooks(results);
  }

  useEffect(() => {
    const storedBooks = localStorage.getItem("books");

    if (storedBooks) {
      const parsedResults = JSON.parse(storedBooks);
      setBooks(parsedResults);
    } else {
      fetchBookData();
    }
  }, []);

  useEffect(() => {
    console.log(books);
  }, [books]);

  return (
    <>
      <AppContext.Provider value={{ books, setBooks }}>
        <NovelyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/selected/:id" element={<SelectedBook />} />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
