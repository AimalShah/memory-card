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
      className='lg:w-48 lg:h-auto |  md:w-32 md:h-auto | sm:w-[7.5rem] flex flex-col bg-gradient-to-r from-[#CBA069] to-[#EBC78A]  border p-2 w-24'
    >
    <button onClick={clickCard}>
      <li key={char.id} className='list-none '>
        <img src={char.character.images.webp.image_url} alt=""  className='  lg:h-[240px] md:h-[180px] w-full border-4 border-[#2C1D17] p-1 object-cover object-top'/>
        {/* <h1 className=' md:text-sm text-2xl text-[#2C1D17] font-bold'>DEAD OR ALIVE</h1> */}
        <h1 className='text-xl text-[#2C1D17] font-semibold md:text-sm lg:text-xl sm:text-sm text-xs' >{char.character.name}</h1>
      </li>
    </button>
    </Tilt>
  );
};

export default Card;