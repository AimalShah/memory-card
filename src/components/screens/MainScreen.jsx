
import {motion} from 'framer-motion'
import Card from "../Card";


const MainScreen = ({gameState , dispatch}) => {


    return(
    <div>
        <div className='flex justify-between mx-8'>
        <div>
        </div>
        <div className='max-w-[10rem] text-sm md:max-w-md md:text-xl'>
            <h1 className='text-white p-2'>score : {gameState.currentScore}</h1>
            <h1 className='text-white  p-1'>High Score : {gameState.highScore}</h1>
        </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale : 0.02}}
          animate={{ opacity: 1, x: 0 , scale : 1 }}
          transition={{ duration: 0.5 }}
        className="lg:max-w-6xl | md:max-w-2xl md:mt-6 | sm:max-w-xl sm:mt-6 | mx-auto max-w-sm overflow-hidden"
        >
            <div className='grid lg:grid-rows-2 lg:grid-cols-5  md:grid-rows-2 md:grid-cols-5 grid-rows-3 grid-cols-4 justify-center gap-2'>
            {gameState.characters.map((char) => (
                <Card char={char} key={char.id} dispatch={dispatch}/>
                ))}
            </div>
          </motion.div>
    </div>
    )
}

export default MainScreen;