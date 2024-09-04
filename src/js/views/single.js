import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = props => {
    const { store } = useContext(Context);
    const params = useParams();

    // Convertir params.theid a número y ajustar el índice
    const characterIndex = parseInt(params.theid) - 1;
    const character = store.peopleStarWars[characterIndex];

    // Generar la URL de la imagen dinámicamente
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`;

    return (
        <div className="container mt-5 bg-light rounded p-5">
            {character ? (
                <>
                    <h1 className="mb-4">{character.name}</h1>
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                className="img-fluid rounded"
                                src={imageUrl}
                                alt={character.name}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = "https://placehold.co/600x600.png";
                                }}
                            />
                        </div>
                        <div className="col-md-8">
                            <h5><strong>Birth Year:</strong> {character.birth_year}</h5>
                            <h5><strong>Gender:</strong> {character.gender}</h5>
                            <h5><strong>Height:</strong> {character.height} cm</h5>
                            <h5><strong>Mass:</strong> {character.mass} kg</h5>
                            <h5><strong>Hair Color:</strong> {character.hair_color}</h5>
                            <h5><strong>Skin Color:</strong> {character.skin_color}</h5>
                            <h5><strong>Eye Color:</strong> {character.eye_color}</h5>
                            <p className="mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <Link to="/">
                                <span className="btn btn-primary btn-lg mt-3" role="button">
                                    Back home
                                </span>
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <h2>Loading...</h2>
                </div>
            )}
        </div>
    );
};

Single.propTypes = {
    match: PropTypes.object
};
