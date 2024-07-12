import logo from './logo.svg';
import './App.css';
import Webcam from "react-webcam";
import {useState} from "react";


function App() {
    const [camera, cameraState] = useState(false)

    const handleClick = () => {
        cameraState(true)
      console.log("handleClick")
      alert("handleClick")
    }
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    return (
      <div className="App">

          <Webcam

           />


          <button onClick={handleClick}>Start12345</button>
      </div>
    );
}

export default App;
