import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = ({ type }) => {
  return (
    <main className="main">
      {/* Artistas populares */}
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas populares"
          items={10}
          itemArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {/* Músicas populares */}
      {type === "songs" || type === undefined ? (
        <ItemList
          title="Musicas populares"
          items={20}
          itemArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Main;
