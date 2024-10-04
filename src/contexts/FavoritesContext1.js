import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const useFavoritePokemons = () => {
  return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children, value }) => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  const updateFavoritePokemons = (pokemonName) => {
    setFavoritePokemons((prevFavorites) =>
      prevFavorites.includes(pokemonName)
        ? prevFavorites.filter((name) => name !== pokemonName)
        : [...prevFavorites, pokemonName]
    );
  };

  return (
    <FavoriteContext.Provider
      value={{ favoritePokemons, updateFavoritePokemons, value }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
