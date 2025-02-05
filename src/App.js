import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import SingleMovie from "./SingleMovie";
import Main from "./Main";
import "./App.css";

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Main />} />
    //     <Route path="home" element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="movie/:id" element={<SingleMovie />} />
        

    //   </Route>
    // </Routes>
    <Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Main />} />
    <Route path="home" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="movie/:id" element={<SingleMovie />} />
    <Route path="*" element={<Main />} />  {/* Handles unknown routes */}
  </Route>
</Routes>

  );
};

export default App;
