import BookShelf from "./BookShelf";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListBooksContent = ({allBooks,addOrUpdateBook}) =>{
    let shelfName = ['currentlyReading','read','wantToRead']; //"currentlyReading","read","wantToRead"

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div>
            <BookShelf shelfName={shelfName[0]} allBooks={allBooks} addOrUpdateBook={addOrUpdateBook}></BookShelf>
            <BookShelf shelfName={shelfName[1]} allBooks={allBooks} addOrUpdateBook={addOrUpdateBook}></BookShelf>
            <BookShelf shelfName={shelfName[2]} allBooks={allBooks} addOrUpdateBook={addOrUpdateBook}></BookShelf>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
};

ListBooksContent.propTypes = {
  allBooks: PropTypes.array.isRequired,
  addOrUpdateBook: PropTypes.func.isRequired
};

export default ListBooksContent;