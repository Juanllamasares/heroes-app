import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, name, images }) => {


  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className="card bg-dark">
            <div className="row no-glutters">
                <div className="col-4">
                    <img src={images.sm} alt={name} className='card-img' />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        

                        <Link to={`/hero/${id}`}>
                            More info...
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}
