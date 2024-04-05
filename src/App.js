import { useState } from "react";
import "./App.css";
import {
  onMoveHandle,
  setNewRightDirection,
  setNewLeftDirection,
  setNew,
  placeToy,
  checkReport
} from "./Util";

function App() {
  const [direction, setDirection] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isPlaced, setPlaced] = useState(false);
  const [report, setReport] = useState("")

  return (
    <div className="App">
      {!isPlaced && <div>Error! Please place the Robot.</div>}
      {/*direction && <div>Current Direction: {direction}</div>*/}
      
      <div className="table-container">
        <div id="robo-toy" style={{ left: "0px", bottom: "0px" }}></div>
      </div>
      <div>
        <form>
          X:
          <input
            required
            maxLength={1}
            pattern="[0-4]{1}"
            onChange={(e) => {
              let newX = setNew(e.target.value);
              console.log(newX)
              setX(newX);
            }}
          ></input>{" "}
          Y:
          <input
            required
            maxLength={1}
            pattern="[0-4]{1}"
            onChange={(e) => {
              let newY = setNew(e.target.value);
              console.log(newY)
              setY(newY);
            }}
          ></input>{" "}
          F:
          <input required pattern="[A-Za-z]{1}" onChange={(e)=>{
            setDirection(e.target.value)
          }}></input>
          <button
            onClick={(e) => {
              e.preventDefault()
              if (x && y && direction) {
                setPlaced(true);
              } else {
                setPlaced(false);
              }
             placeToy(x,y)
             setReport("")
            }}
          >
            Place
          </button>
        </form>
        
        <button
          onClick={() => {
            let newDirection = setNewRightDirection(direction);
            setDirection(newDirection);
            setReport("")
          }}
        >
          Right
        </button>
        <button
          onClick={() => {
            let newDirection = setNewLeftDirection(direction);
            setDirection(newDirection);
            setReport("")
          }}
        >
          Left
        </button>
        <button onClick={()=>{setReport(checkReport(direction))}}>Report</button>
        <button
          onClick={() => {
            direction && onMoveHandle(direction);
            setReport("")
          }}
        >
          Move
        </button>
        {report && <div>{report}</div>}
      </div>
    </div>
  );
}

export default App;
