import React from "react";
import "semantic-ui-css/semantic.min.css";
import Recipes from "./Components/Recipes";
import { Link, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PopupDetails from "./Components/PopupDetails";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipeToUpdate, setRecipeToUpdate] = useState({ ingredients: [] });
  const [detailsVisibility, setDetailsVisibility] = useState("hidden");

  // Fetch Recipes
  const fetchServerData = async (data) => {
    const res = await fetch(`http://localhost:5000/${data}`);
    const results = await res.json();
    return results;
  };

  const expandDetails = (recipe) => {
    const state = detailsVisibility === "hidden" ? "visible" : "hidden";
    setRecipeToUpdate(recipe);
    setDetailsVisibility(state);
  };

  const editRecipe = (newRecipe) => {
    console.log(newRecipe);
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === recipeToUpdate.id ? newRecipe : recipe
      )
    );
  };

  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchServerData("recipes");
      setRecipes(recipesFromServer);
    };
    getRecipes();
  }, []);

  return (
    <Router>
      <div>
        <Recipes expandDetails={expandDetails} recipes={recipes} />
        <PopupDetails
          setDetailsVisibility={setDetailsVisibility}
          recipe={recipeToUpdate}
          editRecipe={editRecipe}
          isVisible={detailsVisibility}
        />
      </div>
    </Router>
  );
};

export default App;
