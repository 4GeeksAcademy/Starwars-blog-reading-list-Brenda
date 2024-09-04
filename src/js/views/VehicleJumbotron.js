import React, { useContext } from 'react';
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleJumbotron = () => {
    const { store } = useContext(Context);
    const params = useParams();

    // Buscar el vehículo por el ID extraído de la URL de la API
    const vehicle = store.vehiclesStarWars.find(vehicle => {
        const vehicleId = vehicle.url.match(/\/([0-9]+)\/$/)[1];
        return vehicleId === params.theid;
    });

    // Generar la URL de la imagen con el vehicleId
    const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`;

    return (
        <div className="container mt-5 bg-light rounded p-5">
            {vehicle ? (
                <>
                    <h1 className="mb-4">{vehicle.name}</h1>
                    <hr className="my-4" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3">
                                <img
                                    className="card-img"
                                    src={imageUrl}
                                    alt={vehicle.name}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://placehold.co/600x600.png";
                                    }}
                                />
                            </div>
                            <div className="col-sm-3">
                                <h6><strong>Model:</strong> {vehicle.model}</h6>
                                <h6><strong>Class:</strong> {vehicle.vehicle_class}</h6>
                                <h6><strong>Manufacturer:</strong> {vehicle.manufacturer}</h6>
                                <h6><strong>Passenger:</strong> {vehicle.passengers}</h6>
                                <h6><strong>Crew:</strong> {vehicle.crew}</h6>
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
