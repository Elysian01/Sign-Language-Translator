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
class AddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayclass: [],
            classes: []
        }
        this.AddNewClass = this.AddNewClass.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    AddNewClass() {
        this.setState((prevState) => {
            return {
                arrayclass: prevState.arrayclass.concat(<TrainingCard key={this.state.arrayclass.length}
                    mykey={this.state.arrayclass.length}
                />)
            }
            console.log("c")
        })
    }

    onFormSubmit(e) {
        this.setState((prevState) => {
            return {
                classes: prevState.classes.concat(< key={this.state.classes.length}
                    mykey={this.state.classes.length}
                />)
            }
        })
        e.preventDefault()
        var x = document.getElementById('inputClassName').value
        console.log(x)
        classes
    }

    render() {

        return (

            <div>
                {/* <div className="model">
                    <button className="loadmodel">Load Model</button>
                    <button className="savemodel">Save Model</button>
                </div>
                <br></br> */}
                <div className="add-class text-center">
                    <form onSubmit={this.onFormSubmit}>
                        <input id="inputClassName" type="text" placeholder="Enter Class Name Here" />
                        <button onClick={this.AddNewClass} className="dark btn-lg btn-shadow mr-5" >Add <i className="fas fa-plus fa-1x"></i></button>
                    </form>
                </div>


                <br></br> <br></br>
                {this.state.arrayclass}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}
export default AddContainer;
