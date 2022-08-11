import React from "react";
import { Route, Routes }from "react-router-dom";
import {MovieData} from './MovieData';
import MovieList from "./Components/MovieList";
import NavBar from "./Components/NavBar";
import Trailer from "./Components/Trailer";


function App() {
  const [movieName, setMovieName] = React.useState(MovieData)
  const [titleSearch, setTitleSearch] = React.useState('');
  const [ratingSearch,setRatingSearch] = React.useState(0)

	
	
	return (
    <div >
    <Routes>
   <Route  path="/" element={
    <div >
<NavBar 
      titleSearch={titleSearch}
      ratingSearch ={ratingSearch} 
      movieName={movieName} 
      setMovieName={setMovieName} 
      setTitleSearch={setTitleSearch} 
      setRatingSearch={setRatingSearch}
      />
			
			
			<MovieList 
      movieName={movieName} 
      titleSearch={titleSearch} 
      ratingSearch={ratingSearch}  

      />	
</div> } />

<Route path="/:id" component={<Trailer movieName={movieName}     />}/>
</Routes>
</div>
			
  ) }
export default App;