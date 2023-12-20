import {  useEffect, useReducer, useState } from 'react'
import MainScreen from './components/screens/MainScreen';
import {
  gameReducer , 
  createInitialGameState,
  cardCharacters,
  ACTIONS
} from './gameReducer'
import { characters } from './Characters';
import StartScreen from './components/screens/StartScreen';
import Color from './assets/black.png';

function App() {
     const [gameState , dispatch] = useReducer(
       gameReducer,
       cardCharacters,
      createInitialGameState
     );

     useEffect(() => {
      localStorage.setItem('highScoreMemory' , JSON.stringify(gameState.highScore))
     },[gameState.highScore])
    
    useEffect(() => {
      if(gameState.characters.every(() => characters.isClicked)){
        dispatch({type : ACTIONS.WIN_GAME});
      }
    } , [gameState.characters]) 

    console.log(gameState)
  return (
    <>
      <div className='bg-zinc-400 h-screen bg-hero-pattern bg-center bg-cover bg-blend-multiply backdrop-blur-3xl'>
        <div className='absolute '>
          <button onClick={() => dispatch({type : ACTIONS.RESET_GAME})}>
          <img src={Color} alt="" />
          </button>
        </div>
        {!gameState.isGameStart && (
          <StartScreen dispatch={dispatch}/>
        )}
      {gameState.isGameStart && !gameState.isGameOver && (
        <MainScreen gameState={gameState} dispatch={dispatch} />
      )}
        </div>
    </>
  )
}

export default App
