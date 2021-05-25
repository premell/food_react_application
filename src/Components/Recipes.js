import Recipe from "./Recipe"
import { Grid } from 'semantic-ui-react'

const Recipes = ({recipes, expandDetails}) => {


	return (

	<Grid container stackable centered columns={3}>
		
		{recipes.map((recipe) => (
		<Grid.Column key={recipe.id}>
<Recipe  expandDetails={expandDetails} recipe={recipe}/>
	</Grid.Column>))}

  </Grid>

	)

}

export default Recipes
