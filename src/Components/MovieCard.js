import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';
const MovieCard = ({movie}) => {
   
    return (
    <div >
        {
        <Card  style={{width: '22rem', margin :'0px' ,height:'35rem'  }} >
           <Card.Img variant="top" src= {movie.poster} alt="blabla" style={{minHeight : '15rem'}}/>
             <Card.Body className="card" style ={{display :'flex', flexDirection:'column', justifyContent:'flex-start' , margin:'0',height:'70%' }}>
                    <Card.Title style ={{height : '25px', width:'auto', overflowY:'auto'}}>{movie.title}</Card.Title>
                    <ReactStars
                        count={5}
                        size={25}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={movie.rating}
                        edit={false}
                    />
                    
                     <Card.Text style ={{width:'100%', height:'40%', overflow :'auto',          }} >
                     {movie.description}
                    </Card.Text>
                    <Link to={`${movie.id}`}>
                                <Button variant="outline-primary" style ={{alignSelf:'center'  }}>See trailer</Button>
                                </Link>
                  
                     
              </Card.Body>
             
        </Card>

        }
        
        
    </div>
    )
}
export default MovieCard;