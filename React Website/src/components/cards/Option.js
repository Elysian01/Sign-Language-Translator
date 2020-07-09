import React from 'react';
class Option extends React.Component{
    constructor(props){
        super(props);
        this.state={
          count:0
        }
        this.Increase=this.Increase.bind(this)
      }
      Increase(){
        this.setState((prevState) => {
              
              
          return {
             count : prevState.count+1
              
              
          }
      })}
    render(){
        console.log(this.props.optionText)
    return(<div>
         <div className="grey-bg">
             <div className="text-center">
               <h3>{this.props.optionText}</h3>
               <h3>Images: <span>{this.state.count}</span></h3>
             </div>
             <div>
               <button className="dark btn-spread btn-shadow mr-5" onClick={this.Increase}>Add New Images <i class="fas fa-plus fa-1x"></i>
               </button>
             </div>
           </div>
        </div>

    )}
}
export default Option;