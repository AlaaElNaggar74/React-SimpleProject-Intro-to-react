
function Input(){
return(
  <>
  <label htmlFor="ddd">userName</label>
  <input type="text" onKeyUp={(e)=>{console.log(e.target.value)}} />

  </>

);
}

export default Input