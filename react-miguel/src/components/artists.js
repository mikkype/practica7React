import React from "react";

import React, { useState, useEffect } from "react";

function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/artists")
      .then(response => response.json())
      .then(data => setArtists(data))
      .catch(error => console.error("Error fetching artists:", error));
  }, []);

  return (
    <div>
      <h2>Artistas de Música Electrónica</h2>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Artists;