import React from "react";
import styled from "styled-components";

const CharacterCard = (props) => {

    const CharWrapper = styled.div`
        .character-box {
            text-align: center;
            padding: 15px;
        }
    
        .character-list {
            background-color: #d3aba4;
            opacity: 0.5;
            margin: 48px auto: 0;
            padding: 15px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
            display: inline-block;
            width: 300px;
            height: 200px;
            
            &:hover {
                opacity: 1.0;
            }
        }  
    `;
    return (
        <CharWrapper>   
            <div className="character-box">
                <div className="character-list"> 
                    <h2>Name: {props.name} </h2>
                    <p>Birth Year: {props.birth_year}</p>
                    <p>Gender: {props.gender} </p>
                    <p>Created: {props.created} </p>
                    <p>Eye Color: {props.eye_color} </p>
                </div>
            </div>
        </CharWrapper>   
    )
}

export default CharacterCard;