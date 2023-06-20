import React, {useState} from 'react'
import ListItems from './ListItems';

function InputList() {
    const [listItems, setListItems] = useState("");
    const [items, setItems] = useState([]);
    const addItems =(event)=>{
        setListItems(event.target.value);
    }
    const listOfItems =() =>{
      setItems((olditems) =>{
        return [...olditems, listItems];
        
      });
      setListItems("");
    }
    const deleteItems =(id)=>{
      console.log('deleted')
      setItems((olditems) =>{
        return olditems.filter((arrElm,index) =>{
          return index !== id;
        })
      })
  };


  return (
    <div>
      <div className="input-container">
        <input type="text" className='input-box-todo' 
        placeholder='Add Items'
        value={listItems} 
        onChange={addItems}/>
        <button className='add-btn' onClick={listOfItems}>+</button>
        
      </div>
      <div>
      <ol className='list-item'>
       {items.map((itemvalue, index) =>{
         return <ListItems text={itemvalue} 
         key={index} 
         id={index} 
         onSelect={deleteItems} />
       })}
      </ol>
    </div>
    </div>
  )
}

export default InputList
