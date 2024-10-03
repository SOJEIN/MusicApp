import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Artist,
  Artists,
  Album,
  Albums,
  Profile,
} from "../pages/index.js";

export function LoggedNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/artists:id" element={<Artists />} />
        <Route path="/album" element={<Album />} />
        <Route path="/albums:id" element={<Albums />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
