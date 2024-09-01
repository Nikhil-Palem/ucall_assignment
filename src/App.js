import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookDetail from "./components/BookDetail";
import Navbar from "./components/Navbar";
import EditBook from "./components/EditBook";

function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/add" element={<BookForm />} />
                    <Route path="/books/:id" element={<BookDetail />} />
                    <Route path="/edit/:id" element={<EditBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
