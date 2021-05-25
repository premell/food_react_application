import { Link } from "react-router-dom";
import { Rating, Button } from "semantic-ui-react";

const Recipe = ({ recipe, expandDetails }) => {
  return (
    <div style={divStyle} className="container four wide column">
      {/*<!--<img src="./Images/{recepie.id}.jpg" alt="" />-*/}
      <img
        src={require("../Images/rot.jpg").default}
        width="500"
        height="600"
      />
      <Rating
        icon="heart"
        defaultRating={recipe.rating}
        maxRating={5}
        disabled
      />
      <Button onClick={() => expandDetails(recipe)}>Edit</Button>
    </div>
  );
};

const divStyle = {};

export default Recipe;
