import Productcompone from "./Productcompone";
import Productdata from "./Productdata";
import "./Productlist.css";
import { useEffect, useState } from "react";

const Productlist = () => {
  let [products,setproduct]=useState([]);
  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then((res) => {
    //     res.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   });
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data =>setproduct(data))



  },[]);

    let singleproduct = products.map((ele) => {
      return ele.price >= 100 ? <Productcompone ele={ele} key={ele.id} /> : null;
    });
  return (
    <div className="productstyle">
      <div className="row">{singleproduct}</div>
    </div>
  );
};

export default Productlist;
