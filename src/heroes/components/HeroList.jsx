import React from "react";
import { HeroCard } from "./HeroCard";
import { useHero } from "../../hooks/useHero";
import { Pagination } from "../../ui/components/Pagination";
import "../../styles.css";

export const HeroList = ({ publisher }) => {
  const { getHeroesByPublishers } = useHero();
  const heroes = getHeroesByPublishers(publisher);
  const { counter, decrement, increment } = useHero();
  const maxHeroes = 20;
  const lastPage = Math.ceil(heroes?.length / maxHeroes);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center m-4">
          {heroes.length > 20 ? (
            <Pagination
              page={counter}
              decrement={decrement}
              increment={increment}
              lastPage={lastPage}
            />
          ) : (
            ""
          )}
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pb-5">
          {heroes
            ?.slice(
              (counter - 1) * maxHeroes,
              (counter - 1) * maxHeroes + maxHeroes
            )
            .map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
        </div>
      </div>
    </>
  );
};
