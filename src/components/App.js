import "../css/App.css";
import { useEffect, useState } from "react";
import SearchBooks from "./SearchBooks.js";
import ListBooksContent from "./ListBooksContent";
import * as BooksAPI from "../utils/BooksAPI.js";
import { Route, Routes} from "react-router-dom";

function App() {
  const [allBooks,setAllBooks] = useState([]);

  useEffect(() => {
      const getAllBooks = async () => {
          const res = await BooksAPI.getAll();     
          setAllBooks(res);      
      };
      getAllBooks();
  },[]);


  const addOrUpdateBook = (bookIdVal,shelf) =>{
      var bookUpdated = false;
      allBooks.forEach((book) =>{
        if(bookIdVal === book.id){
            book.shelf = shelf;
            bookUpdated = true;
        }
      });

      if(!bookUpdated){
        addNewBook(bookIdVal);
      }else{
        setAllBooks([...allBooks]);
      }
  };

  const addNewBook = async (bookIdVal) => {
    const newBook = await BooksAPI.get(bookIdVal);  
    setAllBooks([...allBooks,newBook]);
  };

  return ( 
    <Routes>
      <Route exact path="/" element={<ListBooksContent allBooks={allBooks} addOrUpdateBook={addOrUpdateBook}/>}/>
      <Route path="/search"
            element={
              <SearchBooks allBooks={allBooks} addOrUpdateBook={addOrUpdateBook}/>
            }/> 
    </Routes>
  );
}

export default App;
