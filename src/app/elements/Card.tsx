import { useContext } from "react";
import Image from "next/image";
import { GameDispatchContext } from "../context";

export default function Card(
  {url, flipped, value, id}: 
  {url: string, flipped: boolean, value: string, id: string}) {
  const dispatch = useContext(GameDispatchContext);

  return (
    <div
      onClick={() => !flipped && dispatch({ type: 'clickOnCard', payload: { id, value }})}
      className='relative cursor-pointer border-2 h-40 w-44 rounded bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center justify-center'
    >
      {flipped &&
        <Image
          src={url}
          alt="Picture of an animal"
          fill
          sizes="100%"
        />
      }

      {!flipped && <span className="text-white text-6xl">?</span>}
    </div>
  );
}
