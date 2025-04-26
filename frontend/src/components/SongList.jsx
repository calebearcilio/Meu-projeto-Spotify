import React, { useState } from "react";
import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  // useState() => função usada para alterar o valor de uma variável e atualizar o componente
  const [amountItems, setAmountItems] = useState(5);

  // Forma alternativa, nesse caso, amountItems2 será uma array onde [0] será o valor da variável e 
  // [1] será uma função que altera o valor da variável
  const amountItems2 = useState(5);

  return (
    <div className="song-list">
      {/* enviando um obj das infomrações das músicas */}
      {songsArray
        .filter((correntValue, index) => index < amountItems)
        .map((correntSongsObj, index) => (
          <SongItem {...correntSongsObj} index={index} key={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          setAmountItems(amountItems + 5);
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
