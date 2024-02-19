import React from "react";
import { topProduct } from "../Data/HomePageData";
import TopFood from "../Components/TopFood";

const Recipes = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex gap-8 justify-center">
        {topProduct.map((food) => (
          <TopFood key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
