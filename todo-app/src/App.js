import './App.css';
import React, {useState} from 'react';
import TodoList from './component/TodoList';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const App = () => {

  const[inputList, setInputList]= useState('');
  const[itemList, setItemList]= useState([]); 
  const itemEvent = (event) => { 
    setInputList(event.target.value); 
  };
  
  const handleClick = () =>{
    setItemList((olditems)=>{
      return [...olditems,inputList]
    });
    setInputList("");
  };

  const deleteItems = (id)=>{
    setItemList((olditems)=>{
      return olditems.filter((arrElem,index)=>{
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>ToDo List</h1>
        <div className='head-content'>
          <input type='text' placeholder='Add Item' onChange={itemEvent}/>
          <AddCircleIcon onClick={handleClick}/>
        </div>
        <div className='main-content'>
          
        <ol>          
          {
            itemList.map((itemval,index)=>{   
              return (
              <TodoList 
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />
              );
            })
          }
        </ol>
        </div>
      </div>
      
    </div>
  );
}

export default App;
