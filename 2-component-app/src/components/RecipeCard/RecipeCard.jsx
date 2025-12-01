import React from "react";
import RecipeTitle from "./RecipeTitle";
import IngredientsList from "./IngredientsList";
import Steps from "./Steps";

const RecipeCard = () => {
  return (
    <div>
      <RecipeTitle />
      <IngredientsList />
      <Steps />
    </div>
  );
};

export default RecipeCard;
