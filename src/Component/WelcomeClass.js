// import React from "react";

// const WelcomeClass = () => {
//   return (
//     <div>
//       <h1>sdddddddddddddddddd</h1>
//     </div>
//   );
// }

// export default WelcomeClass;

import React from "react";

class WelcomeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      fname: "Amged",
   lname: "abdooo",
    };
  }
  // State = {
  //   fname: "Amged",
  //   lname: "abdooo",
  // };
  render() {
    return (
      <>
        <h5>*****************************************</h5>
        <h1>welocme from class componet </h1>
        <h1>welocme from class componet with porps {this.props.age}</h1>

        <button 
          onClick={() => {
            this.setState({lname: 'Hello'});
          }}
        >
          change name
        </button>

        <h1>
          {this.state.lname} :::: {this.state.fname}
        </h1>
      </>
    );
  }
}

export default WelcomeClass;
