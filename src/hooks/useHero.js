import { useContext } from "react";
import {HeroContext} from "../heroes/context/HeroContext";

export const useHero = () => {

  const {
    state: { counter,data, isLoading },
    actions: {
      increment,
      decrement,
      reset,
      getHeroById,
      getHeroByName,
      getHeroesByPublishers,
      getPublishers,
    },
  } = useContext(HeroContext);

  return {
    counter,
    data,
    isLoading,
    increment,
    decrement,
    reset,
    getHeroById,
    getHeroByName,
    getHeroesByPublishers,
    getPublishers,
  };
};