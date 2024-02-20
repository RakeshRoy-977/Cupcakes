import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const location = useLocation();
  const nav = useNavigate();
  const foodDetails = location.state.food;
  if (!foodDetails) return null;

  return (
    <>
      {/* back button */}
      <div className="flex justify-end mr-[250px] mt-2 ">
        <button onClick={() => nav(-1)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="max-w-3xl mx-auto mt-8 ">
        <div className="bg-white rounded-lg shadow-md overflow-hidden ">
          <img
            className="w-full h-64 object-cover object-center"
            src={foodDetails.img}
            alt={foodDetails.name}
          />
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold mb-4">{foodDetails.name}</h2>
            <p className="text-gray-700 mb-6">{foodDetails.description}</p>
            <div>
              <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
              <ul className="list-disc pl-6">
                {foodDetails.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-700 mb-2">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Directions:</h3>
              <ol className="list-decimal pl-8">
                {Object.entries(foodDetails.Directions).map(
                  ([step, description]) => (
                    <li key={step} className="text-gray-700 mb-4 list-none ">
                      <h4 className="font-semibold mb-1">{step}</h4>
                      <p>{description}</p>
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeDetails;
