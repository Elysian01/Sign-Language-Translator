import React from 'react';
import '../../css/style.css'

class Webcam extends React.Component {
    render() {
        // 
        return (<div>    <br></br><br></br><br></br>  <br></br><br></br><br></br><br></br>
            <video autoplay playsinline muted id="webcam" className="cam" ></video>
            <br></br><br></br><br></br>
<label className="result">Result : CAR</label><br></br><br></br><br></br>
<label className="probability">Probability : 1</label>   <br></br><br></br><br></br>
<button class="next" >Next </button>      
<br></br><br></br><br></br>
        </div>


        );
    }
}
export default Webcam;
