import { CardPoke, Description, Title, Image } from "./card.styled";
import { useEffect, useState } from "react";

const urlPoke = "https://pokeapi.co/api/v2/pokemon/";

export const Card = ({ index, name }) => {

  

  return (
    <CardPoke>
      <Title>name</Title>
      {/* <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`}/> */}
        <h4>Stats</h4>        
    </CardPoke>
  );
};


// 