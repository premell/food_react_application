import ListItem from "./ListItem";

const IngredientList = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <>
      {ingredients.map((ingredient) => (
        <ListItem key={ingredient.id} ingredient={ingredient} />
      ))}
    </>
  );
};

export default IngredientList;
