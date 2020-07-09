import React from 'react';
import { BrowserRouter, Route,Switch,Link ,NavLink} from 'react-router-dom'
import  Header from '../header/Header'
import Training from '../../pages/Training';
import ModelVoice from '../../pages/Model&Voice';
import VideoCall from '../../pages/VideoCall';
import About from '../../pages/About'
class Router extends React.Component{
render(){
    return(<div>
       <BrowserRouter>
        <Switch>
        <Route path="/" component={Training} exact={true} />
        <Route path="/model" component={ModelVoice} />
        <Route path="/video-call" component={VideoCall} />
        <Route path="/about" component={About} />
 </Switch> 
</BrowserRouter>
   
        
        
        
        </div>

    );
}



}
export default Router;