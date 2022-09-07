import * as BooksAPI from "../utils/BooksAPI";
import PropTypes from "prop-types";

const Book = ({book,addOrUpdateBook}) =>{
    var imageLink = book.imageLinks !== undefined && book.imageLinks['smallThumbnail']  !== undefined ? book.imageLinks['smallThumbnail'] : '';
    var bookurl = `url("${imageLink}")`;
   
    const changeBookShelf = async (shelf) =>{
        await BooksAPI.update(book,shelf);
        const bookIdVal = book.id;
        addOrUpdateBook(bookIdVal,shelf);
    };

    return ( 
        <div className="book">
            <div className="book-top">
            <div
                className="book-cover"
                style={{
                width: 128,
                height: 193,
                backgroundImage:bookurl,
                }}
            ></div>
            <div className="book-shelf-changer">
                <select value={ book.shelf ? book.shelf : 'none'} onChange={(event) => changeBookShelf(event.target.value)}>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors !== undefined ? book.authors[0] : ''}</div>
    </div>
  );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    addOrUpdateBook: PropTypes.func.isRequired,
  };
  

export default Book;