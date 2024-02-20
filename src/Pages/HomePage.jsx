import React from "react";
import TopFood from "../Components/FoodCard";
import { topProduct } from "../Data/HomePageData";
import { Link, useNavigate } from "react-router-dom";
import OurTeam from "../Components/OurTeam";

const HomePage = () => {
  const nav = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://cdn.pixabay.com/photo/2021/02/07/17/33/boy-5992104_1280.jpg"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Life's Short, Eat Cupcakes: Begin Your Sweet Journey Here
                </h2>

                <Link
                  to={"/Recipes"}
                  className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  View Recipes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen flex flex-col justify-center">
        <h2 className="text-center m-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Top Recipes
        </h2>

        <div className="flex gap-10 justify-center">
          {topProduct.map((food) => (
            <TopFood key={food.id} food={food} />
          ))}
        </div>
        <div className=" mt-10 text-center">
          <button onClick={() => nav("/Recipes")} className="btn btn-wide">
            View All
          </button>
        </div>
        <OurTeam />
      </div>
    </>
  );
};

export default HomePage;
