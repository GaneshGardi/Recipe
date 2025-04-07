import React from "react";

export const Modal = ({ isVisible, onClose, recipe }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-opacity-75 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[600px] bg-sky-200 p-4 rounded shadow-lg flex flex-col relative pb-6">
        <button
          className="text-black text-2xl place-self-end hover:text-red-500 cursor-pointer"
          onClick={onClose}
          
        >
          X
        </button>
        <div className="mt-4">
          <h2 className="text-3xl font-bold mb-2">{recipe.title}</h2>
          <label className="text-lg font-semibold">Ingredients:</label>
          <p className="text-gray-900">{recipe.ingredients}</p>
          <label className="text-lg font-semibold">Procedure:</label>
          <p className="text-gray-900">{recipe.cookingProcedure}</p>
          <label className="text-lg font-semibold">Time to Cook:</label>
          <p className="text-gray-900">{recipe.timeToCook} minutes</p>
            
        </div>
      </div>
    </div>
  );
};
