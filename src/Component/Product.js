
import Button from "./Button";
function Product(props){
  return(
<div>
<h1>{props.header}</h1>
<h3>{props.discription}</h3>
<h6>{props.price}</h6>
<Button text="clcik"/>
</div>

  );
}

export default Product;