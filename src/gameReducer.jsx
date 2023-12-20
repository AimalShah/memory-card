import shuffleCharacters from "./Helper";
import { characters } from "./Characters";
export const ACTIONS = {
    START_GAME : 'start-game',
    WIN_GAME : 'win-game',
    CLICK_CARD : 'click-card',
    INCREMENT_SCORE: 'increment-score',
    RESET_GAME : 'reset-game'
}

export const cardCharacters = shuffleCharacters(characters).map((char) => ({
    ...char,
    isClicked: false,
    id : char.character.mal_id,
  }));

export const createInitialGameState = (charArray) => ({
    characters : charArray,
    isGameStart: false,
    isGameOver : false,
    isWin: false,
    currentScore : 0,
    highScore: JSON.parse(localStorage.getItem('highScoreMemory')) || 0
})

const endGame = (gameState) => {
    const highScore = gameState.currentScore > gameState.highScore ? gameState.currentScore : gameState.highScore;

    return{
        ...gameState , 
        currentScore:0,
        highScore,
        isGameOver:true
    }
}

export const gameReducer = (gameState , action) => {
    switch(action.type) {
        case ACTIONS.START_GAME : {
            console.log(gameState.isGameStart)
            return {
                ...gameState , isGameStart : !gameState.isGameStrat
            };
        }
        case ACTIONS.RESET_GAME : {
            console.log(gameState.isGameStart)
            return {
                ...gameState , isGameStart : gameState.isGameStrat ,
                 isGameOver : false
            };
        }
        case ACTIONS.WIN_GAME : {
            return endGame({
                ...gameState, isWin: true, isGameOver : true
            });
        }
        case ACTIONS.INCREMENT_SCORE:{
            return {
                ...gameState,
                currentScore : gameState.currentScore +1
            }
        }
        case ACTIONS.CLICK_CARD: {
             const chosenCharacter = gameState.characters.find(
                 (char) => char.id === action.payload.id
              )
             if(chosenCharacter.isClicked) {
                 return endGame(gameState);
            }
    
            const arrayWithClickedChar = gameState.characters.map((char) => {
             return(
                char.id === action.payload.id ? {...char , isClicked : true} : char)
            })

            return {
                ...gameState,
                characters: shuffleCharacters(arrayWithClickedChar)
            }
        }

        default : {
            throw new Error(`Unknown action : ${action.type}`)
        }
    }

}