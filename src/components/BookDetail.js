import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './BookDetail.css';

function BookDetail() {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/books/${id}/`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the book!", error);
      });
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8000/api/books/${id}/`)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.error("There was an error deleting the book!", error);
      });
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-detail-container">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default BookDetail;
