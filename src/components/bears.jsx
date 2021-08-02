import React, { Component } from "react";
import axios from "axios";
import Bear from "./bear";

class Bears extends Component {
  state = {
    allBears: [],
  };
  render() {
    return (
      <div className="container">
        {/* <h2> Bears Component</h2> */}
        <div className="row">
          {this.state.allBears.map((bear) => (
            <div className="col" key={bear.id}>
              <Bear key={bear.id} bear={bear} onLike={()=> this.likeBear(bear)} onDelete={()=> this.deleteBear(bear.id)}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    const {data} = await axios.get("http://localhost:5000/api/bears");
    let bears = data.map(bear => {
      return {
        id: bear._id,
        imgUrl: bear.imgUrl,
        name: bear.name,
        movies: bear.movies,
        likeCount: bear.likeCount,
        isScary: bear.isScary,
        type: bear.type
      }
    });
    this.setState({allBears: bears});
  }
  async deleteBear(bearIdToDelete){
    await axios.delete("http://localhost:5000/api/bears/" + bearIdToDelete);
    let newBearArray = this.state.allBears.filter(bear=> bear.id !==  bearIdToDelete);
    this.setState({allBears: newBearArray});
  }
  async likeBear(bear){
    await axios.put("http://localhost:5000/api/bears/" + bear.id, {
      likeCount: bear.likeCount + 1
    });
    let allBears = [...this.state.allBears];
    let index = allBears.indexOf(bear);
    allBears[index] = {...bear};
    allBears[index].likeCount++;
    this.setState({allBears: allBears});
  }
}

export default Bears;
