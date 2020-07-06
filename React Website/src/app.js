// import React from 'react';
// import ReactDOM from 'react-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import React from "react";
import ReactDOM from "react-dom";
class Input extends React.Component{
    render(){
  return <Card >
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Class {this.props.mykey+1}</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>};
};

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
class ClassElement extends React.Component{
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
arrayclass:prevState.arrayclass.concat(<Input key={this.state.arrayclass.length} 
    mykey={this.state.arrayclass.length}
    />)
    }
    console.log("c")
})
    }
    render(){
        return(<div>
            <Button onClick={this.AddNewClass}>Add Class</Button>
            {this.state.arrayclass}
            </div>)
    }
}
ReactDOM.render(<ClassElement />, document.getElementById("app"));
