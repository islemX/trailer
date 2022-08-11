import  React from "react";
import { Button, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
const Trailer = ({movieName}) => {
  const{id}=useParams();
    let idmovie=Number(id)
    const movie=movieName.find((elem)=>  elem.id  ===idmovie)
  return (
            <div  style={{ backgroundColor: 'black',  display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',}}  >
<Card style={{ width: '40.1rem' }}>
<ReactPlayer url={movie.trailer}  />
<Card.Body style={{backgroundColor:'red'}}>
  <Card.Title><h1>{movie.title}</h1></Card.Title>
  <Link to ="/">
  <Button  style={{backgroundColor:'balck'}} >Go back</Button>
  </Link>
</Card.Body>
</Card>
 </div>
  )
};

export default Trailer;
