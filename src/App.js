
import { useEffect, useState } from 'react';
import './App.css';
import default_img from './Will-You-Be-My-Valentine.jpg';
import Incorrect from './no.jpeg';
import correct from './yes.gif';

function App() {
  const [defaultImg, setDefaultImg] = useState(default_img);
  const [state, setState] = useState(1);

  useEffect(()=>{
    setDefaultImg(default_img);
  }, [])

  function mouseOver() {
    if (state === 1) {
      setState((prevVal) => (prevVal += 1));
    } else if (state === 2) {
      setState((prevVal) => (prevVal += 1));
    } else if (state === 3) {
      setState((prevVal) => (prevVal -= 2));
    }
  }

  var mystyle = {
    left:
      state === 1 ? "0px" : state === 2 ? "200px" : state === 3 ? "400px" : "",

    position: "absolute",
  };


  return (
    <div className="App">
      <h1>Will you be my valentine?</h1>

      <img src={defaultImg} className='cat' alt='cat'/>  

      <div className='answer'>
        <button className='no' onClick={()=>{setDefaultImg(Incorrect)}} onMouseOver={mouseOver}
              style={mystyle} >
          <div className='answerText'>
            NO
          </div>
        </button>
        <button className='yes' onClick={()=>setDefaultImg(correct)}>
          <div className='answerText'>
            YES
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
