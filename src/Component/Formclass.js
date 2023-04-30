import React,{useState} from 'react'


class Formclass extends React.Component{
constructor(props){
  super(props);
  this.state={
    fname:'',
    lname:'',
    password:'',
    gender:'',

  }  
}

fnameHandler=(value)=>{
  this.setState({fname:value});
}
 lnameHandler=(value)=>{
  this.setState({lname:value});
}
 passwordHandler=(value)=>{
  this.setState({password:value});
}
 genderHandler=(value)=>{
  this.setState({gender:value});
}

render(){
  return(
    <>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(this.state);
      }}
    >
      <label htmlFor="">FName</label>
      <input type="text" placeholder="Enter Your Name" onChange={(e)=>{
        this.fnameHandler(e.target.value);
      }}/>
      <br />
      <label htmlFor="">LName</label>
      <input type="text" placeholder="Enter Your Name" onChange={(e)=>{
        this.lnameHandler(e.target.value);
      }}/>
      <br />
      <label htmlFor="">Gender</label>
      <select name="" id="" onChange={(e)=>{
        this.genderHandler(e.target.value);
      }}>
        <option value="male">Male</option>
        <option value="Female">Female</option>
      </select>{" "}
      <br />
      <label htmlFor="">PassWord</label>
      <input type="password" placeholder="Enter Your PassWord" onChange={(e)=>{
        this.passwordHandler(e.target.value);
      }} />
      <br />
      <button type="submit">Click </button>
    </form>
  </>
  );
}

}

export default Formclass;