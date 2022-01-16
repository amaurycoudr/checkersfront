import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "Screen/Home";
import NotFound from "Screen/NotFound";
import Party from "Screen/Party";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/party" element={<Party />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
