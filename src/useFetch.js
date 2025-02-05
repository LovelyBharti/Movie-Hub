import { useState, useEffect } from "react";

// Setting the base URL for OMDB API
const API_URL = `http://www.omdbapi.com/?apikey=ee86f414`;

// Function to get trailer from YouTube API
const getTrailer = async (movieTitle) => {
  if (!movieTitle) return null; 
   // Use your own YouTube API Key
  const apiKey = "AIzaSyAYDCRBqQDPEdjJgr7RV6vs_RYHn0m7a1U"; 
  const youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieTitle + " trailer")}&type=video&key=${apiKey}`;

  try {
    const res = await fetch(youtubeURL);
    const data = await res.json();
    return data.items?.[0]?.id?.videoId ? `https://www.youtube.com/watch?v=${data.items[0].id.videoId}` : null;
  } catch (error) {
    console.error("Error fetching trailer:", error);
    return null;
  }
};

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    if (!apiParams?.trim()) return; 

    const getMovie = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}&s=${apiParams}`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data = await res.json();

        if (data.Response === "True") {
          setMovie(data.Search || data);
          setIsError({ show: false, msg: "" });

          // Fetch trailer only if a single movie is being searched
          if (data.Title) {
            setTrailerUrl(await getTrailer(data.Title));
          }
        } else {
          setIsError({ show: true, msg: data.Error });
        }
      } catch (error) {
        setIsError({ show: true, msg: `Failed to fetch movies: ${error.message}` });
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const timeOut = setTimeout(getMovie, 1000);
    return () => clearTimeout(timeOut);
  }, [apiParams]);

  return { isLoading, isError, movie, trailerUrl };
};

export default useFetch;

