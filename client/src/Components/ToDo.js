import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

import './ToDo.css'

function ToDo({tid, title, description}){
    return(
        <div className='todo'>
            <div className='todo-header'>
                <div className='todo-title'>
                    <span>{title}</span>
                </div>

                <div className='todo-button edit-button'>
                    <FontAwesomeIcon icon={faPencil}/>
                </div>

                <div className='todo-button delete-button'>
                    <FontAwesomeIcon icon={faX}/>
                </div>
                
            </div>
            {description &&
                <div className='todo-description'>
                    <span>{description}</span>
                </div>
            }
        </div>
    )
}

export default ToDo;