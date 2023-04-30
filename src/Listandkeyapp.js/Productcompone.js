import './Productcompone.css'


const Productcompone = (props) => {
  return (
  
      <div className="card">
        <img src={props.ele.image} alt="error" />
        <h1>{props.ele.category}</h1>
        <p>{props.ele.description}</p>
        <h3>{props.ele.id}</h3>
      </div>
  
  );
};



export default Productcompone;





