import React from "react";
import Button from "./Button";



class Product extends React.Component {
  render() {
    return (
      <>
        <h1>-------------***********---------------</h1>
        <h1>  <span>PTitle: {this.props.title} </span>- {this.props.number} </h1>
        <h3>PDiscription: {this.props.disc} </h3>
        <h4>PEnd: {this.props.end} </h4>
        <Button name="ON"/>
      </>
    );
  }
}

export default Product;
