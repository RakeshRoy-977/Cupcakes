import React from "react";
import { topProduct } from "../Data/HomePageData";
import FoodCard from "../Components/FoodCard";

const Recipes = () => {
  return (
    <div className="">
      <div className="flex gap-8 justify-center flex-wrap mb-20 mt-20 m-auto w-[80vw]">
        {topProduct.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
