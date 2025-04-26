import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";
import NotFound from "./NotFound";

const Song = () => {
  // useParams() => função que retona o parametro escondido na url (App :)
  const { songId } = useParams();

  const songExists = songsArray.some(
    (currentSongObj) => currentSongObj._id === songId
  );

  if (!songExists) {
    return (
      <NotFound />
    );
  }

  // Importando os dados de songs.js filtrando as informações da música cujo id seja igual ao da url
  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSongObj) => currentSongObj._id === songId
  )[0];

  // Importando os dados de artists.js filtrando apenas os dados do artista dono da música
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist
  )[0];

  // Lógica para saber qual é a próxima música e a anterior e verificar se está na última ou na primeira música
  const idArrayOfSongsFromArtist = songsArray
    .filter((currentSongsObj) => currentSongsObj.artist === artist)
    .map((currentSongsObj) => currentSongsObj._id);
  // console.log("idArrayOfSongsFromArtist: " + idArrayOfSongsFromArtist);

  const currentIndex = idArrayOfSongsFromArtist.indexOf(songId);
  // console.log("currentIndex: " + currentIndex);

  // A variável backwardSongId vai receber o id da música anterior SE o id da url não for a primeira música da lista de ids (idArrayOfSongsFromArtist)
  const backwardSongId =
    currentIndex === 0
      ? idArrayOfSongsFromArtist[0]
      : idArrayOfSongsFromArtist[currentIndex - 1];

  // A variável forwardSongId vai receber o id da proxima música SE o id da url não for a ultima música da lista de ids (idArrayOfSongsFromArtist)
  const forwardSongId =
    currentIndex === idArrayOfSongsFromArtist.length - 1
      ? idArrayOfSongsFromArtist[idArrayOfSongsFromArtist.length - 1]
      : idArrayOfSongsFromArtist[currentIndex + 1];

  // console.log(`Atual: ${songId}, Anterior: ${backwardSong}, Próxima: ${forwardSongId}`);

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          backwardSongId={backwardSongId}
          forwardSongId={forwardSongId}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
