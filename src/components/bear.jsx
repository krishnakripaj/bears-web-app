import React, { Component } from "react";

class Bear extends Component {
  state = {
    bearName: this.props.bearName,
    bearId: -345,
    likeCount: this.props.likeCount
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        {/* <h3> Individual Bear Component </h3> */}
        <img src="logo512.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.state.bearName}</h5>
          <p className="card-text">
            Bear Movies
          </p>
          <ul>
              <li>Movie 1</li>
              <li>Movie 2</li>
            </ul>
          <button type="button" className="btn btn-primary" onClick={()=>{this.likeBear(1)}}>
            Like <span className="badge bg-light text-dark">{this.state.likeCount}</span>
          </button>
        </div>
      </div>
    );
  }
  likeBear = (addCounter) => {
    //console.log("You have liked the Bear")
    this.setState({likeCount: this.state.likeCount + addCounter});
  }
  isBear() {
    return this.state.bearId < 0 ? "Not a bear" : "Yes it is a bear";
  }
}

export default Bear;
