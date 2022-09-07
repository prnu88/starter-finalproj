import { useState } from "react";
import BooksGrid from "./BooksGrid";
import "../css/App.css";
import * as BooksAPI from "../utils/BooksAPI.js";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SearchBooks = ({allBooks,addOrUpdateBook}) =>{
  const[searchMatchBooks,setSearchMatchBooks] = useState([]);
  let navigate = useNavigate();

  const searchBook = async (input) => {
          let query = input;
          if(input !== ""){
            const res =  await BooksAPI.search(query,20);   
            if(res !== null && res.error !== 'empty query'){
              const allBooksMap = new Map();
              for(let j=0; j < allBooks.length; j++){
                let currentBook = allBooks[j];
                allBooksMap.set(currentBook.id,currentBook);
              }
              var searchMatchBooksArr = [];
              for(let i=0; i < res.length ; i++){
                  let searchedBook = res[i];
                  let matchBook = allBooksMap.get(searchedBook.id);
                  if(matchBook !== undefined){
                    searchedBook.shelf = matchBook.shelf;
                  }
                  searchMatchBooksArr.push(searchedBook);
              }
            
              setSearchMatchBooks(searchMatchBooksArr);
            }  
          }else{
            setSearchMatchBooks([]);
          }
  };

  const returnToHomePage = () =>{
    navigate("/");
  };

    return (
   <div className="search-books">
    <div className="search-books-bar">
      <div className="close-search">
            <div className="close-search" onClick={() =>returnToHomePage()}>
              Close
            </div>
      </div>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          onChange={(event) => searchBook(event.target.value)}
        />
      </div>
    </div>
    <div>
    <BooksGrid shelfBooks={searchMatchBooks} addOrUpdateBook={addOrUpdateBook}></BooksGrid>
    </div>
  </div>);
}

SearchBooks.propTypes = {
  addOrUpdateBook: PropTypes.func.isRequired
};

export default SearchBooks;