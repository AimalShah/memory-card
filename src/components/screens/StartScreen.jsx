import { motion } from "framer-motion";
import { ACTIONS } from "../../gameReducer";



const StartScreen = ({dispatch}) => {

    const startGame = () => {
    dispatch({ type: ACTIONS.START_GAME })
    };


    return (
        <>
        <div className="container h-screen flex flex-col justify-center">
        <motion.div
        whileHover={{ scale : 1.02}}
        initial={{ opacity: 0, scale : 0.02}}
        animate={{ opacity: 1, x: 0 , scale : 1 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-[90%] max-w-[500px] mx-auto border-4 p-4 bg-[#CBA069] text-[#2C1D17] border-[#2C1D17]" 
        >
            <span>
            Cipher Pol's after the location of One Piece, thinking I'm the key. Little do they know, I've got the Straw Hat secrets. With Gum-Gum powers, let the memory showdown begin! 
            </span><br /><br />
            <span>
            Outsmart Cipher Pol, keep chaos like Luffy's hunger, and make Zoro proud in this epic memory game!
            </span><br /><br />

            <button 
            type="button"
            onClick={startGame}
            className="bg-[#2C1D17] p-2 text-[#CBA069] mx-auto" 
            >
                START GAME
            </button>
        </motion.div>
        <motion.div
        key="privacy-screen"
        className="privacy-screen"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: 'circOut' } }}
        />
        </div>
        </>
    )
}

export default StartScreen;
