import React, { useState } from "react";
import axios from "axios";
import './BookForm.css'

function BookForm({ history }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/books/', {
                title: title,
                author: author,
                description: description
            });
            console.log('Book created:', response.data);
            setAuthor('');
            setDescription('');
            setTitle('');
        } catch (error) {
            console.error('There was an error creating the book!', error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Author</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <label>Description</label>
            <textarea  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <button type="submit">Add Book</button>
        </form>
    );
}

export default BookForm;
    