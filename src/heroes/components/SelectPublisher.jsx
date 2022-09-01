import React from "react";
import { useNavigate } from "react-router-dom";
import { useHero } from "../../hooks/useHero";

export const SelectPublisher = () => {
  const { getPublishers } = useHero();
  const publishers = getPublishers();
  const {reset} = useHero();

  const navigate = useNavigate();

  const handleChange = (e) => {
    reset();
    navigate(`${e.target.value}`);
  };

  return (
    <div>
      <select onChange={handleChange} className='bg-dark text-light'>
      <option defaultValue>Select Publisher</option>
        {publishers
          ? publishers.map((publisher) => {
              return (
                <option key={publisher} value={publisher}>
                  {publisher}
                </option>
              );
            })
          : ""}
      </select>
    </div>
  );
};
