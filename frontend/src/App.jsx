import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateBook from './pages/createBook';
import EditBook from './pages/editBook';
import DeleteBook from './pages/deleteBook';
import ShowBook from './pages/showBook';
import Home from './pages/home';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBook/>} />
      <Route path="/books/details/:id" element={<ShowBook/>} />
      <Route path="/books/edit/:id" element={<EditBook/>} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
    </Routes>
  );
};

export default App;