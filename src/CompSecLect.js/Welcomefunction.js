
import { useState } from "react";


const Welcomefunction = (props) => {

  let [name, setname] = useState("alaaa");
  let [count, setcount] = useState(0);

  const namehandeler=()=>{
  
      setname("kkkkkkkkkk")
    
  }
  return (
    <>
    <h1>come from Welcome function Component</h1>
    <h2>Name : {props.name}</h2>
    <h2>Age : {props.age}</h2>
    <h2>City : {props.city}</h2>
    <h2>namestat : {name}</h2>
    <h2>count : {count}</h2>
    <button onClick={namehandeler}>xcv</button>

<button onClick={()=>{
  setcount(++count)
    }}>count</button>


    </>
  );
}

export default Welcomefunction;
