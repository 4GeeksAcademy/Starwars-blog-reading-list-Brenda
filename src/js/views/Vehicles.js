import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const vehicleCard = {
  width: "18rem",
  height: "30rem",
  background: "#F2F2F2",
  textAlign: "left",
};

export const Vehicles = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row align-items-center ms-1">
        <h1 className="text-warning mb-5 mt-5">Vehicles</h1>
        {store.vehiclesStarWars.map((value) => {
          const isFavorite = store.favoritesStarWars.includes(value.name);

          // Extraer el número al final de la URL de la API
          const vehicleId = value.url.match(/\/([0-9]+)\/$/)[1];

          // Generar la URL de la imagen usando el número extraído
          const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${vehicleId}.jpg`;

          return (
            <div className="col-4 mx-3 mt-2 mb-5 rounded" style={vehicleCard} key={vehicleId}>
              <img 
                src={imageUrl} 
                className="card-img-top mt-3" 
                alt={value.name} 
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "https://placehold.co/600x400.png";
                }} 
              />
              <div className="card-body p-3">
                <h3 className="card-title"><b>{value.name}</b></h3>
                <p className="card-text"><b>Model:</b> {value.model}</p>
                <p className="card-text"><b>Passengers:</b> {value.passengers}</p>
                <p className="card-text"><b>Crew:</b> {value.crew}</p>
                {/* Pasar el vehicleId en lugar del índice */}
                <Link to={`/VehicleJumbotron/${vehicleId}`}>
                  <button className="btn btn-primary">Learn more!</button>
                </Link>
                <button 
                  className="btn btn-warning ms-5" 
                  onClick={() => isFavorite ? actions.removeFavorites(value.name) : actions.addFavorites(value.name)}
                >
                  <i className={`fa${isFavorite ? 's' : 'r'} fa-heart`}></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
