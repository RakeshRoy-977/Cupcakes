import React from "react";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ food }) => {
  const nav = useNavigate();
  const handelClick = () => {
    nav(`/Recipes/${food.id}`, { state: { food } });
  };
  return (
    <>
      <div
        className="card w-96 bg-base-100 shadow-xl cursor-pointer"
        onClick={handelClick}
      >
        <figure>
          <img src={food.img} alt={food.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food.name}</h2>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
