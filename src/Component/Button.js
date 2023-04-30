

const Button = (props) => {
  return (
    <div>
      <button onClick={()=>{
        console.log("hello btu");
      }}>
      {props.text}
      </button>
    </div>
  );
}

export default Button;
