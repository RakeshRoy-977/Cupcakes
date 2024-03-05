import React from "react";

const Add = () => {
  return (
    <>
      <div className="">
        <section className="">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Recipe Request
                <strong className="font-extrabold text-red-700 sm:block">
                  {" "}
                  Submission.{" "}
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Submit your desired cupcake recipe! Fill out the form below to
                suggest a new cupcake flavor or recipe idea that you'd like to
                see featured on our platform!
              </p>

              <div className="mt-5 space-x-5">
                <input
                  className="p-4 min-w-[400px]"
                  type="text"
                  placeholder="Recipe"
                />
                <button className="bg-purple-300 cursor-pointer p-2 pr-5 pl-5 rounded-md">
                  Request
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Add;
