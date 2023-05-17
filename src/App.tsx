import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieList from './components/MovieList';
import About from './components/About';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import Login from './components/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieList />} />
        {/* <Route path="/sessions" element={<Products />} /> */}
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
