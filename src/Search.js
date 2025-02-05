import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery } = useGlobalContext();
  const [isError, setIsError] = useState({ show: false, msg: "" });

  useEffect(() => {
    setQuery(""); 
  }, [setQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      setIsError({ show: true, msg: "Please enter a movie name to search." });
      return;
    }

    setIsError({ show: false, msg: "" });
  };

  return (
    <section className="search-section">
      <h2>Search Your Pasandida Movie🔍</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  );
};

export default Search;
