
import {motion} from 'framer-motion'
import Card from "../Card";


const MainScreen = ({gameState , dispatch}) => {


    return(
    <div>
        <div className='flex justify-between mx-8'>
        <div>
        </div>
        <div className=''>
            <h1 className='text-white text-3xl p-4'>score : {gameState.currentScore}</h1>
            <h1 className='text-white text-3xl p-4'>High Score : {gameState.highScore}</h1>
        </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale : 0.02}}
          animate={{ opacity: 1, x: 0 , scale : 1 }}
          transition={{ duration: 0.5 }}
        className="container mx-auto"
        >
            <div className='flex justify-center gap-8 flex-row flex-wrap'>
            {gameState.characters.map((char) => (
                <Card char={char} key={char.id} dispatch={dispatch}/>
                ))}
            </div>
          </motion.div>
    </div>
    )
}

export default MainScreen;