import { getAnimals } from '../utils/api';
import { shuffleArray } from '../utils';
import { v4 as uuidv4 } from 'uuid';
import Cards from "./Cards";

export default async function GameBoard(
  {}:
  {}
) {
  const animals = await getAnimals();
  const newAnimalsCopy = animals.map(e => {
    return {
      ...e,
      id: uuidv4()
    }
  })
  const shuffledAnimals = shuffleArray([...animals, ...newAnimalsCopy]);
  return (
    <Cards shuffledAnimals={shuffledAnimals} />
  );
}
