'use client'
import { useState, Suspense } from "react";
import ScoreBoard from './elements/ScoreBoard';
import GameBoard from './elements/GameBoard';
import GameBoardSkeleton from './elements/GameBoardSkeleton';
import GameProvider from "./context";

export default function Home() {
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <GameProvider>
      <main className="flex flex-col justify-between p-20">
        <div className="p-6 bg-white rounded shadow">
          {!gameStarted &&
            <div className="flex items-center justify-center mb-4 gap-4">
              <label className="mr-2 font-bold text-black">Insert Playername:</label>
              <input
                type="text"
                className="border rounded p-2"
                placeholder="Gandalf"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
              {playerName &&
                <button
                  onClick={() => setGameStarted(true)}
                  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                >
                  Play !
                </button>
              }
            </div>
          }

          {gameStarted && <ScoreBoard playerName={playerName} />}
          {gameStarted && 
            <Suspense fallback={<GameBoardSkeleton />}>
              <GameBoard />
            </Suspense>
          }
        </div>
      </main>
    </GameProvider>
  );
}
