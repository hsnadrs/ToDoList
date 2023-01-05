import { useState } from 'react';
import './App.css';

const App = () => {
  
  const [favourites, setFavourites] = useState([]);
  //let toDoList =["aaa","bbb","ccc"];
  const [toDoList, setToDoList]= useState (["aaa","bbb","ccc"]);
  const[newToDo, setNewToDo] = useState(""); 

  const handleAddToDo = () => {
   
    let tempToDo = [...toDoList];
    tempToDo.push(newToDo);
    setToDoList(tempToDo);
  } 

  const handleRemoveToDo = (index) => {
    let tempToDo = [...toDoList];
    tempToDo.splice(index, 1);
    setToDoList(tempToDo);
  } 
// const handleEntry =(event)=>{
//   newToDo += event.target.value;

// }
  return (
    <div className="container">
        
        <div id="addBox">
      

      <h3>ALL To Do</h3>
      {toDoList.map((toDoList, index) => {
        return <HeroCard key={index} heroObj={toDoList}  removeToDo={handleRemoveToDo}/>
      })}
{/* <input type="text" onChange={handleEntry} className="newToDoEntry" value="">type to Do</input> */}
<p><input  className="txtBox"  value={newToDo} onChange={(e) => {setNewToDo(e.target.value)}} /> </p>
{/* <button onClick={handle}>Button</button> */}
<p><button   onClick={handleAddToDo}>Add new to Do</button></p>
</div>
{/* box */}
    </div>
    // main
  );
};

const Favourites = ({ favHeroData, removeToDo }) => {
  return (
    <div>
      <p>{favHeroData.hero}</p>
      <button onClick={removeToDo}>X</button>
    </div>
  )
}

const HeroCard = (props) => {
  const [done, setdone] = useState(true);
  //let index = props.key;
  return (
    <>
    
      

      {done && (
        <div>
          
          <p>To Do: {props.heroObj}</p>
        </div>
      )}   
        {!done && (
        <div>
          
          <p><s>To Do: {props.heroObj}</s></p>
        </div>
      )}   

      <button onClick={() => setdone(!done)}>{ done ? "not done INFO" : "done INFO" }</button>
      
      <button onClick={props.removeToDo}>X</button>
    </>
  )
}

export default App;