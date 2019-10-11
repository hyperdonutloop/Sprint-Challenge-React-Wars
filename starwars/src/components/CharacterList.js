import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response.data.results);
                setCharacter(response.data.results);
    
    
    
        })
        .catch (error => {
          console.log("the data was not returned");
    
        })
    
    }, []);

      return (
      <div className="character">
        {character.map((character, index) => {
            return (
                <CharacterCard
                    key={index}
                    name={character.name}
                    birth_year={character.birth_year}
                    gender = {character.gender}
                />
            );
        })}
      </div>

      );


}