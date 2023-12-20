import Tilt from 'react-parallax-tilt';
import { ACTIONS } from '../gameReducer';

const Card = ({ char , dispatch}) => {

    const clickCard = () => {
        dispatch({type: ACTIONS.INCREMENT_SCORE });


        setTimeout(() => {
            dispatch({type: ACTIONS.CLICK_CARD , payload:{ id : char.id}})
        }, 500)
    }
  return (
     <Tilt
      tiltMaxAngleX={18}
      tiltMaxAngleY={18}
      glareEnable
      glareMaxOpacity={0.2}
      className='lg:w-60 flex flex-col gap-7 bg-gradient-to-r from-[#CBA069] to-[#EBC78A]  border p-2 shadow-2xl shadow-cyan-500/50'
    >
    <button onClick={clickCard}>
      <li key={char.id} className='list-none '>
        <img src={char.character.images.webp.image_url} alt=""  className='  lg:h-[240px] w-full border-4 border-[#2C1D17] p-1 object-cover object-top'/>
        <h1 className='text-2xl text-[#2C1D17] font-bold'>DEAD OR ALIVE</h1>
        <h1 className='text-xl text-[#2C1D17] font-semibold' >{char.character.name}</h1>
      </li>
    </button>
    </Tilt>
  );
};

export default Card;