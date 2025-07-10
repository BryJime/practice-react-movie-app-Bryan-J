import { useState } from "react";
import movies from "./movieData";


function SelectGenre() {

    const [selectedGenre, setSelectedGenre] = useState("");

    const handleSelectGenre = (e) => {

        const findMovies = movies.map((movie) => {
                
                if (movie.genre === e.target.value){
                    return <h2>{movie.name}</h2>
                }
            })
        

        setSelectedGenre(findMovies);
 
    }

    return (
        <div>
            <p className="genreTitle">Genres:</p>
            <select id="genre" name="genre-dropdown" className="genre-selection" onChange={handleSelectGenre} >

                <option id="0" default={true} >Select Genre</option>
                <option id="1" value="Adventure" >Adventure</option>
                <option id="2" value="Horror" >Horror</option>
                <option id="3" value="SciFi" >SciFi</option>
                <option id="4" value="Drama" >Drama</option>
            </select>
            <br/>
            <div className="show-movies">  
                {selectedGenre}
            </div>
    
        </div>
    )

}

export default SelectGenre;