import React, { Component } from "react";
import Bear from "./bear";

class Bears extends Component {
  state = {
    allBears: [
      { id: 1, likeCount: 5, bearName: "Bear #1" },
      { id: 2, likeCount: 10, bearName: "Bear #2" },
      { id: 3, likeCount: 15, bearName: "Bear #3" },
    ],
  };
  render() {
    return (
      <div className="container">
        {/* <h2> Bears Component</h2> */}
        <div className="row">
          {this.state.allBears.map((bear) => (
            <div className="col" key={bear.id}>
              <Bear key={bear.id} likeCount={bear.likeCount} bearName={bear.bearName}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Bears;
