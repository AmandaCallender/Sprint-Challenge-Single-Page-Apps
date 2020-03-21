import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res);
        setChar(res.data.results);
      })
      .catch(err => {
        console.log("failed to load", err);
      });
  }, []);

  return (
    <section className="character-list">
      {char.map(item => (
        <CharacterCard info={item} />
      ))}
    </section>
  );
}
