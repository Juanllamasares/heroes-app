import React from 'react'
import { HeroList}  from '../components/HeroList';
import { useParams } from 'react-router-dom'
import '../../styles.css'

export const HeroByPublisherPage = () => {

  const {publisher} = useParams();
  return (
    <div className='heroList'>
      <HeroList publisher={publisher} />
    </div>
  )
}