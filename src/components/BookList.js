import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./BookList.css";

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/books/")
            .then(response => setBooks(response.data))
            .catch(error => console.error("Error fetching books:", error));
    }, []);

    return (
        <div className="container">
            <h1>Book List</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`} className="book_detail_link">
                           <span> {book.title}</span>  by <span>{book.author}</span> 
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;
