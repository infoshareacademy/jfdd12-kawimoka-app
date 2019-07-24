import React from "react";
import PropTypes from "prop-types";
import "./Meal.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Paper from "material-ui/Paper";
import { PlanConsumer } from "../../contexts/PlanContext.js";
import { Button } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

library.add(faPlus);
library.add(faArrowLeft);

export function MealCardFull(props) {
  const { meal, canAddMeal } = props;
  const { name, time, image, kcal, nutritions, recipe, ingradients } = meal;
  const { fat, carbs, protein } = nutritions;

  return (
    <PlanConsumer>
      {value => {
        if (value.filteredMeals.length === 0) {
          return null;
        } else {
          return (
            <Paper zDepth={3} className="mealCardFull" onClick={props.onClick}>
              <div className="mealCardTop">
                <div className="mealCardFullInfo">
                  <h1> {name} </h1>
                  <h2>Calories: {kcal} kcal</h2>
                  <h2>Prep Time: {time} min </h2>
                  {canAddMeal && (
                    <Button
                      color="teal"
                      style={{ width: "8vw", margin: "10px 10px 10px 20px" }}
                      className="addMealButton"
                      onClick={() => value.addOrRemoveMeal(meal, true)}
                    >
                      ADD +
                    </Button>
                  )}
                </div>
                <div className="mealCardFullHeart">
                  <Icon
                    size="large"
                    color="red"
                    name="heart "
                    onClick={() => value.addToFavouritesMeals(meal)}
                  />
                </div>

                <img className="mealPhoto" src={image} alt={"tu jest tekst"} />
              </div>

              <div className="mealCardMain">
                <div className="mealCardMainLeft">
                  <div className="nutritions">
                    <h3>Nutritions</h3>
                    <p>fat: {fat}g</p>
                    <p> carbs: {carbs}g </p>
                    <p>protein: {protein}g </p>
                  </div>
                  <div className="ingradients">
                    <h3>Ingradients:</h3>
                    <ul>
                      {ingradients.map(ingradient => (
                        <li>{ingradient}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="recipe">
                  <h3> Recipe</h3>
                  <p>{recipe}</p>
                </div>
              </div>
              <div className="mealCardFooter" />
            </Paper>
          );
        }
      }}
    </PlanConsumer>
  );
}

MealCardFull.propTypes = {
  canAddMeal: PropTypes.bool
};

MealCardFull.defaultProps = {
  canAddMeal: true
};
