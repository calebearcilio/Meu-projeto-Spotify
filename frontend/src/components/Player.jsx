import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faCirclePlay,
  faCirclePause,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// Função usada para formatar a duração da música
const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60).toString();

  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSecongs = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

/**************** COMPONENTE PRINCIPAL ****************/
const Player = ({ duration, backwardSongId, forwardSongId, audio }) => {
  const audioPlayer = useRef(); // useRef() => usado para retornar a refência de um elemento contido no documento
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false); // variável usada para saber se está tocando ou não a música
  const [currentTime, setCurrentTime] = useState(formatTime(0)); // Variável usada para mostrar a duração atual da música
  const durationInSeconds = timeInSecongs(duration);

  // função usada para pausar ou começar a tocar a música
  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();

    setIsPlaying(!isPlaying);
  };

  // useEffect => função usada para iniciar uma bloco de comando (nesse caso inicia a função setInterval), depois inicia outro bloco de comando verificando a condição 'isPlaying'
  useEffect(() => {
    // setInterval => função usada para rodar um bloco de códico a cada intervalo de tempo específico
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => clearInterval(intervalId); // clearInterval => finaliza a função setInterval
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${backwardSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>

        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />

        <Link to={`/song/${forwardSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>

      <div className="player__progress">
        <p>{currentTime}</p>

        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>

        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
