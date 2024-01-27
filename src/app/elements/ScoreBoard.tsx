import { useContext } from "react";
import { GameContext } from "../context";

export default function ScoreBoard({playerName} : {playerName: string}) {
  const { correct, failures } = useContext(GameContext);

  return (
    <div className="flex items-center justify-around gap-5">
      <div className="flex gap-3">
        <span>Player:</span>
        <div className="font-bold">{playerName}</div>
      </div>
      <div className="flex gap-3">
        <span className="text-green-500">Correct: {correct}</span>
        <span className="text-red-500">Failures: {failures}</span>
      </div>
    </div>
  );
}
