import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import { HeroContext } from "./HeroContext";

export const HeroProvider = ({ children }) => {

  const { data, isLoading } = useFetch(
    "https://akabab.github.io/superhero-api/api/all.json"
  );
  
  const getHeroById = (id) => {
    return data?.find((hero) => hero.id === id);
  };
  
  const getHeroByName = (name = "") => {
    name = name.toLowerCase().trim();
    if (name.length === 0) return [];
    return data?.filter((hero) => hero.name.toLowerCase().includes(name));
  };

  const getHeroesByPublishers = (publisher) => {
    publisher = publisher.toLowerCase().trim();
    if (publisher.length === 0) return [];

    return data?.filter((hero) => {
      return hero.biography?.publisher?.toLowerCase().includes(publisher);
    });
  };

  const getPublishers = () => {
    const publishers = data
      ?.map((hero) => hero.biography.publisher)
      .filter(
        (value, index, self) => self.indexOf(value) === index && value != null
      );
    return publishers;
  };

  const {counter, increment, decrement, reset} = useCounter(1);

  const state = {
    counter,
    data,
    isLoading,
  };

  const actions = {
    increment,
    decrement,
    reset,
    getHeroById,
    getHeroByName,
    getHeroesByPublishers,
    getPublishers,
  };

  return (
    //provee a todos los componentes de este contexto de toda la informacion que pasamos por aca
    <HeroContext.Provider value={{ state, actions }}>
      {children}
    </HeroContext.Provider>
  );
};
