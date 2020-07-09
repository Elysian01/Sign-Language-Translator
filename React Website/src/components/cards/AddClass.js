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
            classes: [],
            name: "",
            number: 0
        }
    }




    setCard = (element) => {
        this.setState({
            name: element.target.value
        })
    }

    AddNewClass = (e) => {
        this.setState((prevState) => { return { number: prevState.number + 1 } })
        const copyCardArray = Object.assign([], this.state.classes)
        copyCardArray.push(
            {
                name: this.state.name,
                count: 0,
                number: this.state.number
            })
        this.setState({
            classes: copyCardArray
        })
        const inputClass = document.getElementById("inputClassName")
        inputClass.value = "";
        console.log(this.state);
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
                    <input id="inputClassName" type="text" onBlur={this.setCard} placeholder="Enter Class Name Here" />
                    <button onClick={this.AddNewClass} className="dark btn-lg btn-shadow mr-5" >Add <i className="fas fa-plus fa-1x"></i></button>
                </div>

                <ul>
                    {
                        this.state.classes.map((card, index) => {
                            return (
                                <TrainingCard name={card.name} count={card.count} number={card.number} classes={this.state.classes} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default AddContainer;
