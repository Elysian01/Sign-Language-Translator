import React from 'react';
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
