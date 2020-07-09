import React from 'react';
import ReactDOM from 'react-dom';
import Camera from '../components/webcamp/Camera'
import Navigation from '../components/header/Navigation'
import Header from '../components/header/Header'
import '../css/style.css'
class ModelVoice extends React.Component {
    render() {
        return (<div>     <Navigation />
            <Header text="Train Your Own Model"></Header>

            <div class="row"  >
                <div class="column flex-container">
                    <br></br>
                    <Camera></Camera>
                </div>
                <div class="column flex-2-container">



                    <div>   <h3 className="texttospeech text-center">TEXT TO SPEECH</h3>
                        <textarea placeholder="Enter text Here" rows="20" cols="40"  ></textarea>
        <br></br>                <button className="dark    convert "  >CONVERT</button></div>   </div>
            </div>
        </div>
        );
    }
}
export default ModelVoice;