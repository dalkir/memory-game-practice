import { createContext, useReducer, Dispatch } from 'react';
import { Action, GameData } from '../utils/interfaces';

export const GameContext = createContext<GameData>(null!);
export const GameDispatchContext = createContext<Dispatch<Action>>(null!);

export default function GameProvider({ children }: { children: JSX.Element }) {
  const [gameData, dispatch] = useReducer(
    gameDataReducer,
    initialGameData
  );

  return (
    <GameContext.Provider value={gameData}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
}

function gameDataReducer(gameData: GameData, action: Action) {
  switch (action.type) {
    case 'clickOnCard': {
      const { id, value } = action.payload

      const newState = { ...gameData };

      if (newState.currentFlipped.length === 2) {
        if (newState.currentFlipped[0].value !== newState.currentFlipped[1].value) {
          newState.flippedCards = newState.flippedCards.filter(e => {
            return e !== newState.currentFlipped[0].id && e !== newState.currentFlipped[1].id 
          })
        }

        newState.currentFlipped = [];
      }

      if (newState.currentFlipped.length < 2) {
        newState.flippedCards = [...newState.flippedCards, id]
        newState.currentFlipped = [...newState.currentFlipped, { id, value }]
      }

      if (newState.currentFlipped.length === 2) {
        if (newState.currentFlipped[0].value === newState.currentFlipped[1].value) {
          newState.correct = newState.correct + 1;

          if (newState.correct === 10) {
            alert("Congratulations!! You won!!!")
          }
        } else {
          newState.failures = newState.failures + 1;
        }
      }

      console.log(newState.flippedCards)

      return newState;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialGameData = {
  playerName: '',
  failures: 0,
  correct: 0,
  flippedCards: [],
  currentFlipped: []
};
