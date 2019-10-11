import React from "react";
import styled from "styled-components";

const CharacterCard = (props) => {

    const CharWrapper = styled.div`
        .character-list {
            background-color: #d3aba4;
            opacity: 0.5;
            margin: 48px auto: 0;
            width: 300px;
            padding: 0 15px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
            display: flex;
            flex-direction: column;
        

            &:hover {
                opacity: 1.0;
            }
        }

        
    `;
    return (
        <CharWrapper>   
        <div className="character-list">
            
                <h2>Name: {props.name} </h2>
                <p>Birth Year: {props.birth_year}</p>
                <p>Gender: {props.gender}</p>

        </div>
        </CharWrapper>   
    )
}

export default CharacterCard;