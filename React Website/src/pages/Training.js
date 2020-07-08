import React from 'react'
// import WebcamCapture from '../components/webcamp/WebcamCapture'
import Header from '../components/header/Header'
import Navigation from '../components/header/Navigation'
import AddContainer from '../components/cards/AddClass'
import Webcam from '../components/webcamp/Webcam'
import '../css/style.css'
class Training extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Header text="Train Your Own Model"></Header>
                <div class="row"  >
                    <div class="column flex-container">
                        <br></br>
                        <Webcam className="mycam"></Webcam>
                    </div>
                    <div class="column flex-2-container">
                        <AddContainer></AddContainer>
                    </div>
                </div>




            </div>
        )
    }
}
export default Training;