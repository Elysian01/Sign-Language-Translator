import React from 'react';
import ReactDOM from 'react-dom';
import Camera from '../components/webcamp/Camera'

import '../css/style.css'
class ModelVoice extends React.Component {
    render() {
        return (<div>
            <div class="row"  >
                <div class="column flex-container">
                    <br></br>
<Camera></Camera>              
  </div>
                <div class="column flex-2-container">
<label>s</label>
                </div>
            </div>
            </div>
        );
}
}
export default ModelVoice;