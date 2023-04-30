import React from "react";

class StatewithClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counte: 0,
    };
  }

  changefunction = () => {
    this.setState({ counte: this.state.counte + 1 });
  };

  render() {
    return (
      <div className="statclass">
        <h1>**********************************************</h1>
        <h1>classs component</h1>
        <p>this is count class [ {this.state.counte} ]</p>
        <button onClick={this.changefunction}>Kick</button>
      </div>
    );
  }
}

export default StatewithClass;
