import React from 'react';
<<<<<<< HEAD
import { createKNNClassifier, createMobileNetModel, createWebcamInput } from '../../js/train';


class TrainingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      count: props.count,
      number: props.number,
      classes: props.classes,
      mobilenetModel: null,
      knnClassifierModel: null,
      webcamInput: null

    }

  }

  async componentDidMount() {
    const mobilenetModel = await createMobileNetModel();
    const knnClassifierModel = await createKNNClassifier();
    const webcamInput = await createWebcamInput();

    this.setState({ mobilenetModel: mobilenetModel })
    this.setState({ knnClassifierModel: knnClassifierModel })
    this.setState({ webcamInput: webcamInput })
  }


  addDatasetClass = async () => {

    // console.log(this.state)
    var count = this.state.count
    var number = this.state.number
    var classes = this.state.classes
    // Capture an image from the web camera.
    const img = await this.state.webcamInput.capture();

    let currentCount = count
    currentCount += 1
    await this.setState({ count: currentCount })

    // console.log(classes)
    // Get the intermediate activation of MobileNet 'conv_preds' and pass that
    // to the KNN classifier.
    const activation = this.state.mobilenetModel.infer(img, 'conv_preds');

    // // Pass the intermediate activation to the classifier.
    this.state.knnClassifierModel.addExample(activation, number);

    // // Dispose the tensor to release the memory.
    img.dispose();
  }


  imageClassificationWithTransferLearningOnWebcam = async () => {
    console.log("Machine Learning on the web is ready");
    while (true) {
      if (this.state.knnClassifierModel.getNumClasses() > 0) {
        const img = await this.state.webcamInput.capture();

        // Get the activation from mobilenet from the webcam.
        const activation = this.state.mobilenetModel.infer(img, 'conv_preds');
        // Get the most likely class and confidences from the classifier module.
        const result = await this.state.knnClassifierModel.predictClass(activation);
        console.log(classes[result.label].name)

        // console.log(result.confidences[result.label])
        //     const classes = ['A', 'B', 'C'];
        //     document.getElementById('console').innerText = `
        //   prediction: ${classes[result.label]}\n
        //   probability: ${result.confidences[result.label]}
        // `;

        // Dispose the tensor to release the memory.
        img.dispose();
      }
      await tf.nextFrame();
    }
  };

  train = async () => {
    await this.addDatasetClass();
  }

  window.onload = () => {
    await imageClassificationWithTransferLearningOnWebcam();
  };

  render() {
    return (

      <div>
        <li>
          <div className="grey-bg">
            <div className="text-center">
              <h3>Class name : <span>{this.props.name}</span></h3>
              <h3>Images: <span>{this.state.count}</span></h3>
            </div>
            <div>
              <button value={this.props.name} className="dark btn-spread btn-shadow mr-5" onClick={this.train} >Add New Images <i class="fas fa-plus fa-1x"></i>
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  };
};
export default TrainingCard;
=======
import Option from './Option'
// class TrainingCard extends React.Component {
// constructor(props){
//   super(props);
// } 

//   render() {
//     console.log(this.options);
//     // <div className="grey-bg">
//     //     <div className="text-center">
//     //       <h3>{this.props.name}</h3>
//     //       <h3>Images: <span>{this.state.count}</span></h3>
//     //     </div>
//     //     <div>
//     //       <button className="dark btn-spread btn-shadow mr-5" onClick={this.Increase}>Add New Images <i class="fas fa-plus fa-1x"></i>
//     //       </button>
//     //     </div>
//     //   </div>
//     return (
//      props.options.map((option)=>{
//         <Option key={option}
//     optionText={option}/>
//       })
//     );
//   };
// };

const TrainingCard = (props) => {
  console.log(props);
  
  return (
    <div>
{
        props.options.map((option) =>
          <Option key={option}
            optionText={option} />)
   
      
}
      </div> 
  );
}
export default TrainingCard;
>>>>>>> 9444441f8d9929728a825d1ead77d119946957c7
