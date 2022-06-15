import { FaTimes } from "react-icons/fa";
import { BsEmojiNeutral, BsEmojiDizzy, BsEmojiSmile, BsEmojiHeartEyes } from "react-icons/bs";
import { IconContext} from 'react-icons'


export const Task = (props) => {
    const text = props.task.text
    const recept = props.task.recept
    return (
        <div className='task'>
            <IconContext.Provider value={{size: '70px'}}>
            <h3>{text} <FaTimes /> <BsEmojiHeartEyes/> <BsEmojiSmile/><BsEmojiNeutral/><BsEmojiDizzy/></h3>
            <p>{recept}</p>
            </IconContext.Provider>
        </div>
    )
}
