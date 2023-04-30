import React from "react";
class WelcomeClassx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "alaaSTAT",
      lname: "elnaggarSTAT",
    };
  }
  change = () => {
    this.setState({
      fname: "alaaSTAT",
    });
  };

  // rechange = () => {
  //   this.setState({
  //     fname: "youuuuu",
  //   });
  // };

  
  // state={
  //   fname:"alaaSTAT",
  //   lname:"elnaggarSTAT"

  // }

  render() {
    return (
      <>
        <p>---------------******************------------------</p>
        <h1>Welcome From welcome Class Component: </h1>

        <h2>Name: {this.props.name}</h2>
        <h2>Age: {this.props.age}</h2>
        <h2>City: {this.props.city}</h2>
        <h2>User: {this.props.use}</h2>
        <h2>
          state: {this.state.fname} {this.state.lname}
        </h2>
        <button onClick={()=>{
            this.setState({
              fname: "youuuuu",
            });
        }}>cicccc</button>

        <button onClick={this.change}>SET</button>
      </>
    );
  }
  // componentDidMount(){

  // }
}

export default WelcomeClassx;
