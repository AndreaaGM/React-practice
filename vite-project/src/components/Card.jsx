import Button from "./Button";

const Card = ({ nombre, email }) => {
  //console.log(props); 
  return   <div>
    <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="icon" width={100} />
    <h4>Nombre: {nombre} </h4>
    <h4>Email: {email}</h4>
    <Button text='Ver Detalle'>Ver detalle</Button>
  </div>;
};

export default Card