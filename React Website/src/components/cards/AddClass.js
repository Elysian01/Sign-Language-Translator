
import React from "react";
import ReactDOM from "react-dom";
import TrainingCard from './TrainingCard';
import '../../css/style.css';

<<<<<<< HEAD
// const Form = () => {
//   const [inputList, setInputList] = useState([]);
=======

>>>>>>> 9444441f8d9929728a825d1ead77d119946957c7


class AddContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
<<<<<<< HEAD
            classes: [],
            name: "",
            number: 0
        }
    }




    setCard = (element) => {
        this.setState({
            name: element.target.value
        })
=======
            options: []

        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
>>>>>>> 9444441f8d9929728a825d1ead77d119946957c7
    }
    onFormSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim()
        console.log(option)

<<<<<<< HEAD
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
=======
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })

>>>>>>> 9444441f8d9929728a825d1ead77d119946957c7




    }
    render() {
        return (

            <div>
                {/* <div className="model">
                    <button className="loadmodel">Load Model</button>
                    <butto+n className="savemodel">Save Model</button>
                </div>
                <br></br> */}

                <div className="add-class text-center">
<<<<<<< HEAD
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
=======
                    <form onSubmit={this.onFormSubmit}>
                        <input id="inputClassName" type="text" placeholder="Enter Class Name Here"
name="option"

                        />
                        <button className="dark btn-lg btn-shadow mr-5" >Add <i className="fas fa-plus fa-1x"></i></button>
                    </form>   </div>
                <TrainingCard options={this.state.options} />
                <br></br> <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
>>>>>>> 9444441f8d9929728a825d1ead77d119946957c7
            </div>
        )
    }
}
export default AddContainer;






