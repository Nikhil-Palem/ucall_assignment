import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditBook() {
    const { id } = useParams();
    const [book, setBook] = useState({ title: '', author: '',description:'' });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the book!", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/books/${id}`, book)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error("There was an error updating the book!", error);
            });
    };

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={book.title} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Author:</label>
                    <input 
                        type="text" 
                        name="author" 
                        value={book.author} 
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input 
                        type="text" 
                        name="description" 
                        value={book.description} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit">Update Book</button>
            </form>
        </div>
    );
}

export default EditBook;
