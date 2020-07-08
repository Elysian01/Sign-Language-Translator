import React from 'react';
import ReactDOM from 'react-dom';
import Camera from '../components/webcamp/Camera'
import Header from '../components/header/Header'
import Navigation from '../components/header/Navigation'
import AddContainer from '../components/cards/AddClass'
import Webcam from '../components/webcamp/Webcam'
import '../css/style.css'
class ModelVoice extends React.Component {
    render() {
        return (<div>
            <Header />
            <div class="row"  >
                <div class="column flex-container">
                    <br></br>
<Camera></Camera>              
  </div>
                <div class="column flex-2-container">

                </div>
            </div>
            </div>
        );
}
}
export default ModelVoice;