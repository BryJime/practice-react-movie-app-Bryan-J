import { useState } from "react";

const movies = [
    {
        name: "Interstellar",
        genre: "SciFi"
    },
    {
        name: "Pulp Fiction",
        genre: "Drama"
    },
    {
        name: "Spy Kids",
        genre: "SciFi"
    },
    {
        name: "Oculus",
        genre: "Horror"
    },
    {
        name: "SpongeBob",
        genre: "Adventure"
    },
]

let showMovies;

function SelectGenre() {

    const [selectedGenre, setSelectedGenre] = useState("");



    const handleSelectGenre = (e) => {

        const details = movies.map((movie) => {

            if (e.target.value === movie.genre) {
                return movie.name
            }

        })


        console.log(details);

        setSelectedGenre(details);


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
            <div className="show-movies">  </div>
        </div>
    )

}

export default SelectGenre;