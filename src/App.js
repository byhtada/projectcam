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
              audio={false}
              height={720}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={videoConstraints}
          >
              {({ getScreenshot }) => (
                  <button
                      onClick={() => {
                          const imageSrc = getScreenshot()
                      }}
                  >
                      Capture photo
                  </button>
              )}
          </Webcam>


          <button onClick={handleClick}>Start</button>
      </div>
    );
}

export default App;
