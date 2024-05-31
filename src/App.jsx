import "./App.css";
import AllBooks from "./Components/Catalog/AllBooks.jsx";
import AllRequests from "./Components/Requests/AllRequests.jsx";
import database from "../BookData.json";
import { useState } from "react";

export default function App() {
  const [myRequests, setMyRequests] = useState([]);
  const [myBooks, setMyBooks] = useState(database.catalog);

  function addToRequestListHandler(bookToAdd) {

    if (!myRequests.some(book => book.id === bookToAdd.id)) {
      setMyRequests(prevRequests => [...prevRequests, bookToAdd]);
    }
  }

  function removeFromRequestListHandler(bookToRemove) {
    setMyRequests(() => {
      return myRequests.filter((thisRequest) => thisRequest.id != bookToRemove.id);
    });
  }

  return (
    <main>
      <h1>Library Catalog</h1>

      <section id="books-and-requests">
        <AllBooks
          bookList={myBooks}
          addToRequestListHandler={addToRequestListHandler}
        ></AllBooks>
        <AllRequests
          requestList={myRequests}
          removeFromRequestListHandler={removeFromRequestListHandler}
        ></AllRequests>
      </section>
    </main>
  );
}
