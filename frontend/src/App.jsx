import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Song from "./pages/Song";
import Songs from "./pages/Songs";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* : => usado para indicar que depois dos : será um parametro | usado na função useParams() */}
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/song/:songId" element={<Song />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artist/:artistId" element={<Artist /> } />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
