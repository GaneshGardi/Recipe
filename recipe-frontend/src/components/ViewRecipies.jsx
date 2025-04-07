import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Modal } from "./Modal";


export const ViewRecipies = () => {

  const [selectedRecipe, setSelectedRecipe] = useState();

  const [showModal, setShowModal] = useState(false);

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/getAllRecipes");
        setRecipes(response.data);
      } catch (err) {
        console.log("Error in fetching recipes..", err);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <Fragment>

    <div className="bg-[#EFDCAB] w-full min-h-screen">
      <h1 className="text-4xl font-bold flex justify-center items-center pt-3">
        View Recipes
      </h1>

      <div className="mt-6 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {recipe.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {recipe.description}
            </p>
            <a onClick={() => {
              setSelectedRecipe(recipe);
              setShowModal(true);
            }}
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              View
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
                >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
    <Modal isVisible={showModal} onClose={() => setShowModal(false)} recipe={selectedRecipe}/>
        </Fragment>
  );
};
