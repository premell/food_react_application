const ListItem = ({ ingredient }) => {
  console.log(ingredient);
  return (
    <div
      style={{
        borderRadius: 10,
        margin: 5,
        width: "100%",
        height: 25,
        backgroundColor: "white",
      }}
    >
      <div contentEditable={true} style={textContainer} id="ingredient_name">
        <p style={{ width: "100%", display: "inline", textAlign: "center" }}>
          {ingredient.ingredientName}
        </p>
      </div>
      <div
        contentEditable={true}
        style={{ float: "right", width: "20%", display: "inline" }}
        id="ingredient_amount"
      >
        <p style={{ width: "100%", display: "inline" }}>{ingredient.amount}</p>
      </div>
    </div>
  );
};

const textContainer = {
  justifyItems: "center",
  float: "left",
  width: "80%",
  height: 25,
  paddingLeft: 8,
  padding: 3,
};

export default ListItem;
