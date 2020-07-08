import React from 'react';
class TrainingCard extends React.Component {
  render() {
    return (
      <div className="grey-bg">
        <div className="text-center">
          <h3>Class name : <span>Hello</span></h3>
          <h3>Images: <span>50</span></h3>
        </div>
        <div>
          <button className="dark btn-spread btn-shadow mr-5">Add New Images <i class="fas fa-plus fa-1x"></i>
          </button>
        </div>
      </div>
    );
  };
};
export default TrainingCard;