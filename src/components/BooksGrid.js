import "../css/App.css";
import Book from "./Book";
import PropTypes from "prop-types";


const BooksGrid = ({shelfBooks,addOrUpdateBook}) =>{
    return (
        <div>
            <ol className="books-grid">
                {shelfBooks.map((book) => (
                        <li>
                            <Book key={book.id} book={book} addOrUpdateBook={addOrUpdateBook}></Book>
                        </li>
                    ))}            
            </ol>
      </div>
    );
}


BooksGrid.propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    addOrUpdateBook: PropTypes.func.isRequired,
  };
  

export default BooksGrid;