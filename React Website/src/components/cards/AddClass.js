// import React from 'react';
// import ReactDOM from 'react-dom';

import React from "react";
import ReactDOM from "react-dom";
import TrainingCard from './TrainingCard';
import '../../css/style.css'


// const Form = () => {
//   const [inputList, setInputList] = useState([]);

//   const onAddBtnClick = () => {
//     setInputList(inputList.concat(<Input key={inputList.length} />));
//   };

//   return (
//     <div> {inputList}
//       <button onClick={onAddBtnClick}>Add input</button>
     
//     </div>
//   );
// };
class AddContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arrayclass:[]
        }
        this.AddNewClass=this.AddNewClass.bind(this)
    }
    AddNewClass(){
this.setState((prevState)=>{
    return{
arrayclass:prevState.arrayclass.concat(<TrainingCard key={this.state.arrayclass.length} 
    mykey={this.state.arrayclass.length}
    />)
    }
    console.log("c")
})
    }
    render(){
        return(<div><div className="model">
<button className="loadmodel">Load Model</button>  
<button className="savemodel">Save Model</button>     </div>   
  <br></br>
            <input placeholder="Enter your class" class="classinput" alt="Camera"></input>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <button onClick={this.AddNewClass} className="addbutton">Add Class</button>
            <br></br> <br></br>
            {this.state.arrayclass}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>)
    }
}
export default AddContainer;
