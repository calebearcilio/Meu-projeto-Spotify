import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

// { title, items, itemArray, path, idPath } => desestruturando o que foi mandado a partir do componente main
const ItemList = ({ title, items, itemArray, path, idPath }) => {
  // useLocation() => função que retorna a url
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // variárel usada para expandir a lista de itens
  const amountItems = isHome ? items : Infinity;

  return (
    <section className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      {/*  Elemento artista */}
      <div className="item-list__container">
        {/* .filter percorre toda a lista itemArray e retorna os resultados de acordo com o filtro depois de "=>"  e .map retorna de a co*/}
        {itemArray
          .filter((correntValue, index) => index < amountItems)
          .map((corrObj, index) => (
            <SingleItem
              key={`${title}-${index}`}
              {...corrObj} // ...corrObj => desestruturação de corrObj (evnia uma cópia de corrObj para SingleItem)
              idPath={idPath}
            />
          ))}
      </div>
    </section>
  );
};

export default ItemList;
