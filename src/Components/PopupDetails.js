import { useEffect, useState } from "react";
import { Form, Rating, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import IngredientList from "./IngredientList";

const PopupDetails = ({
  recipe,
  editRecipe,
  isVisible,
  setDetailsVisibility,
}) => {
  console.log("Popup ", recipe);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const popupStyle = {
    position: "fixed",
    top: "9%",
    left: "10%",
    padding: 50,
    width: "80%",
    height: "80%",
    background: "blue",
    visibility: `${isVisible}`,
  };

  const submit = (newRecipeData) => {
    editRecipe(newRecipeData);
    setDetailsVisibility("hidden");
  };

  return (
    <div style={popupStyle}>
      <Form
        onSubmit={handleSubmit((data) => {
          submit(data);
        })}
      >
        <input {...register("name", { required: true })} />
        {errors && <p>This is requied</p>}

        <input {...register("description", { required: true })} />
        {errors && <p>This is requied</p>}
        <input {...register("rating", { valueAsNumber: true })} />
        {errors && <p>This is required </p>}
        <IngredientList ingredients={recipe.ingredients} />

        <input type="submit" />
      </Form>
    </div>
  );
};
// {...register("ingredients")}

export default PopupDetails;
