import React from "react";

const CharacterCard = (props) => {
    return (
        <div className="character-list">
            <h2>Name: {props.name}</h2>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default CharacterCard;