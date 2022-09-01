import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useHero } from '../../hooks/useHero';

export const HeroPage = () => {

  const { heroId } = useParams();
  const { getHeroById } = useHero();
  const hero = getHeroById(parseInt(heroId));

  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1);
  };

    
  return (
      <div className="container row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
          <img src={hero.images.lg} alt={hero.name} className='img-thumbnail bg-dark' />
        </div>
        <div className="col-8 bg-dark rounded-3">
          <h3>
            {hero.name}
          </h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item bg-dark text-light'>
                <b>Intelligence: </b>
                {hero.powerstats.intelligence}
            </li>
            <li className='list-group-item bg-dark text-light'>
                <b>Strength: </b>
                {hero.powerstats.strength}
            </li>
            <li className='list-group-item bg-dark text-light'>
                <b>Speed: </b>
                {hero.powerstats.speed}
            </li>
            <li className='list-group-item bg-dark text-light'>
                <b>Durability: </b>
                {hero.powerstats.durability}
            </li>
            <li className='list-group-item bg-dark text-light'>
                <b>Power: </b>
                {hero.powerstats.power}
            </li>
            <li className='list-group-item bg-dark text-light'>
                <b>Combat: </b>
                {hero.powerstats.combat}
            </li>
            <li className='list-group-item bg-dark text-light'>
                <b>Alter ego: </b>
                {hero.biography.alterEgos}
            </li>
            <li className='list-group-item bg-dark text-light'>
                <b>Publisher: </b>
                {hero.biography.publisher}
            </li>
            <li className='list-group-item bg-dark text-light'>
                <b>First Appareance: </b>
                {hero.biography.firstAppearance}
            </li>
          </ul>
          <p>{ hero.characters }</p>

          <button
            className='btn btn-outline-primary'
            onClick={onNavigateBack}
          >
            Back...
          </button>
        </div>
      </div>
  )
}
