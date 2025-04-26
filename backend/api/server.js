import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();
const app = express();
const PORT = 10000;

app.use(cors());

app.get("/api/", (request, response) => {
  response.send(
    '<head><title>Servidor Projeto Spotify</title></head> <a href="/api/artists">/artists</a> | <a href="/api/songs">/songs</a>'
  );
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api`);
});
