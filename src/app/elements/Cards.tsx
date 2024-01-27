import { Card as CardInterface } from "../utils/interfaces";
import { useContext } from "react";
import Card from "./Card";
import { GameContext } from "../context";

export default function Cards(
  { shuffledAnimals }:
  { shuffledAnimals: CardInterface[]}
) {
  const { flippedCards } = useContext(GameContext);

  return (
    <div className="grid grid-cols-5 gap-6 p-4">
      {shuffledAnimals.map((e, i) => {
        return <Card
          url={e.url} 
          flipped={flippedCards.includes(e.id)} 
          value={e.value} 
          id={e.id} 
          key={e.id}
        />
      })}
    </div>
  );
}
  