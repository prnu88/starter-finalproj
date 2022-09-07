import PropTypes from "prop-types";
import BooksGrid from "./BooksGrid.js";


const BookShelf = ({shelfName,allBooks,addOrUpdateBook}) =>{

  const renderShelfName = (shelfName) =>{
     if(shelfName === 'currentlyReading'){
        return 'Currently Reading';
     }
     else if(shelfName === 'wantToRead'){
      return 'Want to Read';
     } 
     else if(shelfName === 'read'){
      return 'Read';
     }
  };

  const shelfBooks = allBooks.filter((book) =>
      book.shelf === shelfName);

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{renderShelfName(shelfName)}</h2>
          <div className="bookshelf-books"> 
            <BooksGrid shelfBooks={shelfBooks} addOrUpdateBook={addOrUpdateBook}></BooksGrid>
          </div>
        </div>
      </div>
    );
};

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  allBooks: PropTypes.array.isRequired
};

export default BookShelf;