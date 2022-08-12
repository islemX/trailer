import  React from "react";
import { Button, Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
const Trailer = ({movies}) => {
  const{id}=useParams();
    let idmovie=Number(id);
    const movie=movies.find((elem) =>   elem.id  ===idmovie)
  return (
            <div className="trailer"  >
<Card style={{ width: '40.1rem' }}>
<ReactPlayer url={movie.trailer}  />
<Card.Body style={{backgroundColor:'beige'}}>
  
  <p  variant="body2"
                      color="#546e7a"
                      fontFamily="Segoe UI">{movie.description}</p>
  <Link to ="/">
  <Button style={{Color:"azure"}} >Go back</Button>
  </Link>
</Card.Body>
</Card>
 </div>
  )
};

export default Trailer;
