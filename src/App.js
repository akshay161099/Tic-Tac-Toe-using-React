import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Heading(){
  return(
    <h1 className='heading'>TIC-TAC-TOE</h1>
      
  );
} 
function Square({index,value,clickingEvent}){
  
  return(
    <button id={index}  className='square' onClick={clickingEvent} >{value}</button>
  );

}
var count = 0;
function App() {
  
  const [isNextX, setNextX] = useState(true);
  const [value, setValue] = useState(Array(9).fill(null));
function findWinner(value){
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]
  for(let i = 0; i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(value[a] && value[a] === value[b] && value[b] === value[c]){
      console.log("winner")
      return [a,b,c];
    }
  }
}

  function clicking(i){
    
    if(findWinner(value) || value[i]){
      return;
    }
    const arr = value.slice();
    if(isNextX & arr[i] === null){
      arr[i] = 'X'
      setNextX(false)
      count+=1
    }
    else if(isNextX === false & arr[i] === null){
      arr[i] = '0';
      setNextX(true)
      count+=1;
    }
    console.log(count)
    setValue(arr);
    if(count > 0){
     const result = findWinner(arr); 
    }
  }
  const winner = findWinner(value);
  let status;
  function color(){
      const [x,y,z] = winner.toString().split(',');
      document.getElementById('board').style.pointerEvents = 'none';
      document.getElementById(x).style.backgroundColor = "green";
      document.getElementById(y).style.backgroundColor = "green";
      document.getElementById(z).style.backgroundColor = "green";
  }
  if(winner) {
    status = "Winner: "+value[winner[0]];
    color();
  }
  else{
    status = "Next Player: "+(isNextX ? "X" : "O");
  }
  return (
    <>
    <div className='background'>
    <Heading />
    <div className='Status'>{status}</div>
    <div className='board' id='board'>
    <div className='boardRow' >
    <Square index = {0} value={value[0]} clickingEvent={()=> clicking(0)}/>
    <Square index = {1} value={value[1]} clickingEvent={()=> clicking(1)}/>
    <Square index = {2} value={value[2]} clickingEvent={()=> clicking(2)}/>
    </div>
    <div className='boardRow'>
    <Square index = {3} value={value[3]} clickingEvent={()=> clicking(3)}/>
    <Square index = {4} value={value[4]} clickingEvent={()=> clicking(4)}/>
    <Square index = {5} value={value[5]} clickingEvent={()=>clicking(5)}/>
    </div>
    <div className='boardRow'>
    <Square index = {6} value={value[6]} clickingEvent={()=>clicking(6)}/>
    <Square index = {7} value={value[7]} clickingEvent={()=>clicking(7)}/>
    <Square index = {8} value={value[8]} clickingEvent={()=>clicking(8)}/>
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
