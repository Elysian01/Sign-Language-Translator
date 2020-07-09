
import React from "react";
import ReactDOM from "react-dom";
import TrainingCard from './TrainingCard';
import '../../css/style.css';




class AddContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []

        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim()
        console.log(option)

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })





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
            </div>
        )
    }
}
export default AddContainer;






