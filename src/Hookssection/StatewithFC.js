import { useState,useEffect } from "react";


function StatewithFC(){
let [count,setcount]=useState(0);
let [product,setproduct]=useState(0);


const changcount=()=>{
  setcount(count+1);
  // console.log("hello");
}
const changproduct=()=>{
  setproduct(product+1);
  // console.log("hello");
}

useEffect(()=>{
  // changestat();
  console.log("hellow");
  // setcount(count+1);
});

  return(
    <div className="functionstat">
      <h1>You Clicked Button To Count [ {count} ]Times</h1>
      <button onClick={changcount}>count</button>
      <h1>You Clicked Button To Product [ {product} ]Times</h1>
      <button onClick={changproduct}>product</button>
      
    </div>
  );
}


export default StatewithFC;