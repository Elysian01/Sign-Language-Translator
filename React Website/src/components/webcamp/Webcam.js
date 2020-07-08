import React from 'react';
import '../../css/style.css'

class Webcam extends React.Component {
    render() {
        // 
        return (
            <div>
                <video autoplay playsinline muted id="webcam" className="cam"></video>

                <div className="grey-bg" >
                    <div className="row text-center">
                        <h3>Prediction: <span>How are you ?</span></h3>
                        <h3>Probability : <span>50%</span></h3>
                    </div>
                </div>

                <button className="dark btn-lg btn-shadow">Next step <i class="fas fa-arrow-right"></i></button>
            </div>


        );
    }
}
export default Webcam;
