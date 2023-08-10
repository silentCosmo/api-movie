import React, { useEffect, useState } from "react";
import { filler, instance } from "../axios/instance";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

function MovieInfo() {
  const { id } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovieInfo = async () => {
    await instance
      .get("shows/" + id)
      .then((res) => {
        res.data ? setLoading(false) : setLoading(true);
        setMovie(res.data);
      })
      .catch((err) => {
        alert(err);
      });
    console.log(movie);
  };
  const cleanText = (htmlString) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  };
  useEffect(() => {
    getMovieInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="p-5 pt-12 md:h-screen">
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div className="md:flex justify-center md:mx-10">
          <h1 className="text-4xl font-bold md:hidden text-red-900 text-center mb-3 -mt-5">
            {movie.name}
          </h1>
          <div className="flex justify-center md:w-[35vw]">
            <img
              src={movie.image?.original ? movie.image.original : filler}
              className="w-72 rounded-md"
              alt="movie-poster"
            />
          </div>
          <div className="md:w-[65vw]  p-5 d:px-5">
            <h1 className="text-4xl font-bold text-red-900 md:grid hidden ">{movie.name}</h1>
            <h2 className="text-xl font-bold text-yellow-700 mt-2  md:text-start text-center">
              &#9733; {movie.rating.average} &#9734;
            </h2>
            <h3 className="text-sm opacity-80 md:text-start text-center">{movie.language}</h3>
            <h3 className="text-sm font-light opacity-80 md:text-start text-center">{`${
              movie.genres[0] ? movie.genres[0] : movie.genres[0]
            } ${movie.genres[1] ? " | " + movie.genres[1] : ""} ${
              movie.genres[2] ? " | "+ movie.genres[2] : ""
            }`}</h3>
            <h4 className="font-bold mt-3 md:text-start text-center mb-1">About the movie</h4>
            <p className="text-justify">{cleanText(movie.summary)}</p>
            <div className="mt-5">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-red-700 py-3 px-8 text-zinc-50 rounded-md hover:bg-red-600 hover:scale-95 duration-150"
              >
                Book tickets
              </button>
              {modalOpen ? <BookingForm movie={movie} /> : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieInfo;
