import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const characterCard = {
    width: "18rem",
    height: "38rem",
    background: "#ffffff",
    textAlign: "left",
};

export const People = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="row align-items-center ms-1">
                <h1 className="text-warning mb-5">Characters</h1>
                {store.peopleStarWars.map((value, index) => {
                    const isFavorite = store.favoritesStarWars.includes(value.name);

                    // Utiliza index + 1 para generar la URL de la imagen
                    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`;

                    return (
                        <div className="col-4 mx-3 mb-5 rounded" style={characterCard} key={index}>
                            <img 
                                src={imageUrl} 
                                className="card-img-top mt-3" 
                                alt={value.name} 
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; 
                                    currentTarget.src = "https://placehold.co/600x600.png"; // Imagen de reserva
                                }}
                            />
                            <div className="card-body p-3">
                                <h5 className="card-title"><b>{value.name}</b></h5>
                                <p className="card-text"><b>Birth Year:</b> {value.birth_year}</p>
                                <p className="card-text"><b>Hair color:</b> {value.hair_color}</p>
                                <p className="card-text"><b>Eye color:</b> {value.eye_color}</p>
                                <Link to={`/single/${index + 1}`}>
                                    <button className="btn btn-primary">Learn more!</button>
                                </Link>
                                <button 
                                    className="btn btn-warning ms-2" 
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
}
