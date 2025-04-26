import axios from "axios";

/**
 * Altere aqui o URL para o seu servidor local ou para o servidor remoto
 * Lembrando que o servidor local precisa se conectar ao seu banco de dados
 */

// const URL = "http://localhost:10000/api";
const URL = "https://spotify-calebearcilio.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
