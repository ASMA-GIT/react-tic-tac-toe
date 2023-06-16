import React,{useState} from 'react';
import './App.css';
import {Block} from './components/block';
import {Reset} from "./components/reset";

function App() {
  var winner=""
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] =useState('X');
  const [gameOverState, setGameOverState] =useState(false);
  console.log(gameOverState);
  

  const checkWinner= (state:any[])=>{
    const wins=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [3,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i=0; i<wins.length; i++){
      const [a,b,c]=wins[i];
      if(state[a]!=null && state[a]===state[b] && state[a]===state[c])
        {
          winner=state[a]
          return true
        }
    }
    return false;
  }
  const gameReset =()=>{
    setGameOverState(false);
    setState(state.fill(null));
    window.location.reload();
  }
  
  const getBlockIndex=(index:number)=>{
    const stateCopy = Array.from(state);
    if(stateCopy[index]!== null || gameOverState===true) {
      return;
    }
      

      stateCopy[index] = currentTurn;
      setState(stateCopy);
      
      const win = checkWinner(stateCopy);
      if(win){
        setGameOverState(true);
        console.log(gameOverState);
        alert(`${winner} won the Match`);
      }

      setCurrentTurn(currentTurn ==='X'?'O':'X')
      
  }

  
  return (
    <div className="Board">
      <div>
        <h2 className='title'>Tic tac Toe</h2>
      </div>
      <div className="row">
        <Block onClick={()=>getBlockIndex(0)} value={state[0]}/>
        <Block onClick={()=>getBlockIndex(1)} value={state[1]}/>
        <Block onClick={()=>getBlockIndex(2)} value={state[2]}/>
      </div>
      <div className="row">
        <Block onClick={()=>getBlockIndex(3)} value={state[3]}/>
        <Block onClick={()=>getBlockIndex(4)} value={state[4]}/>
        <Block onClick={()=>getBlockIndex(5)} value={state[5]}/>
      </div>
      <div className="row">
        <Block onClick={()=>getBlockIndex(6)} value={state[6]}/>
        <Block onClick={()=>getBlockIndex(7)} value={state[7]}/>
        <Block onClick={()=>getBlockIndex(8)} value={state[8]}/>
      </div>
      <div >
        <Reset onClick={()=>gameReset()}/>
      </div>
    </div>
  );
}

export default App;
