import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList =(props) =>{

    return(
        <div className='todo-list'>
            <li>
                <DeleteIcon onClick={()=>{props.onSelect(props.id)}}/>
                {props.text}
            </li>
        </div>
    );
}

export default TodoList;