import React, { useState, useEffect } from "react";

const MoviePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [MovieTitle, setMovieTitle] = useState();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const URL = `http://www.omdbapi.com/?s=${MovieTitle}&apikey=79158211`;
      const response = await fetch(URL);
      const final_Data = await response.json();
      console.log(final_Data.Search);
      setMovieData(final_Data.Search);
    };
    fetchMovies();
        // eslint-disable-next-line
  }, [isClicked]);
  return (
    <>
      <div>
        <div className="heading">
          <h2>FindMovie</h2>
        </div>
        <div className="nav">
          <input type="text" name="search" 
            onChange={(e) => {
              setMovieTitle(e.target.value);
            }}
          />
          <button  onClick={() => { setIsClicked((prevState) => !prevState); }}
            className="searchBtn"> Search
          </button>
        </div>
        <div>
          <p>Sharing a few of our favourite movies</p>
        </div>
        <div >
          {movieData.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.Poster} alt="poster"/>
                <h4>{item.Title}</h4>
                <p>Year- {item.Year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoviePage;