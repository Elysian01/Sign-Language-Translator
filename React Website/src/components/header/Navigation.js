import React from 'react';
import '../../css/style.css'
class Navigation extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
<div>
<ul class="topnav">
  <li><a class={this.props.training || "main"} href="#" >Training</a></li>
  <li><a class={this.props.model || "main"} href="#" >Model & Voice</a></li>
  <li><a class={this.props.videocall || "main"} href="#" >Video Call</a></li>
  <li ><a class={this.props.about || "main"} href="#" >About</a></li>
</ul>
</div>
        );
    }
}
export default Navigation; 