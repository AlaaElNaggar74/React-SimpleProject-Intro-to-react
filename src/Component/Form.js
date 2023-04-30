// import Formbutton from "./Formbutton";

import { useState } from "react";


function Form() {
  const [fname,setFname]= useState(' ');
  const [lname,setLname]= useState(' ');
  const [password,setPassword]= useState(' ');
  const [gender,setGender]= useState(' ');

const fnameHandler=(value)=>{
  setFname(value);
}
const lnameHandler=(value)=>{
  setLname(value);
}
const passwordHandler=(value)=>{
  setPassword(value);
}
const genderHandler=(value)=>{
  setGender(value);
}



  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(fname , lname , password ,gender);
        }}
      >
        <label htmlFor="">FName</label>
        <input type="text" placeholder="Enter Your Name" onChange={(e)=>{
          fnameHandler(e.target.value);
        }}/>
        <br />
        <label htmlFor="">LName</label>
        <input type="text" placeholder="Enter Your Name" onChange={(e)=>{
          lnameHandler(e.target.value);
        }}/>
        <br />
        <label htmlFor="">Gender</label>
        <select name="" id="" onChange={(e)=>{
          genderHandler(e.target.value);
        }}>
          <option value="male">Male</option>
          <option value="Female">Female</option>
        </select>{" "}
        <br />
        <label htmlFor="">PassWord</label>
        <input type="password" placeholder="Enter Your PassWord" onChange={(e)=>{
          passwordHandler(e.target.value);
        }} />
        <br />
        <button type="submit">Click </button>
      </form>
    </>
  );
}

export default Form;
