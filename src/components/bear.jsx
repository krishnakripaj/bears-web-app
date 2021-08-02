import React, { Component } from "react";

class Bear extends Component {
  state = {
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        {/* <h3> Individual Bear Component </h3> */}
        <img src={this.props.bear.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.bear.name}</h5>
          <p className="card-text">
            {this.props.bear.type}
          </p>
          <ul>
             {this.props.bear.movies.map(movie => <li>{movie}</li>)}
            </ul>
          <button type="button" className="btn btn-primary" onClick={this.props.onLike}>
            Like <span className="badge bg-light text-dark">{this.props.bear.likeCount}</span>
          </button>{" "}
          <button type="button" className="btn btn-danger" onClick={this.props.onDelete}>
            Delete
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
