import React, {useContext} from 'react';
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsJumbotron = () => {
    const { store } = useContext(Context);
    const params = useParams();

    // Convertir params.theid a número y ajustar el índice
    const planetIndex = parseInt(params.theid) - 1;
    const planet = store.planetsStarWars[planetIndex];

    // Generar la URL de la imagen dinámicamente
    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`;

    return (
        <div className="container mt-5 bg-light rounded p-5">
            {planet ? (
                <>
                    <h1 className="mb-4">{planet.name}</h1>
                    <hr className="my-4" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <img
                                    className="card-img"
                                    src={imageUrl}
                                    alt={planet.name}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://placehold.co/600x600.png";
                                    }}
                                />
                            </div>
                            <div className="col-sm-3">
                                <h6><strong>Population:</strong> {planet.population}</h6>
                                <h6><strong>Climate:</strong> {planet.climate}</h6>
                                <h6><strong>Terrain:</strong> {planet.terrain}</h6>
                                <h6><strong>Gravity:</strong> {planet.gravity}</h6>
                                <h6><strong>Rotation Period:</strong> {planet.rotation_period}</h6>
                            </div>
                            <div className="col-sm-6">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <Link to="/">
                        <span className="btn btn-primary btn-lg" role="button">
                            Back home
                        </span>
                    </Link>
                </>
            ) : (
                <div className="text-center">
                    <h2>Loading...</h2>
                </div>
            )}
        </div>
    );
};

PlanetsJumbotron.propTypes = {
    match: PropTypes.object
};
