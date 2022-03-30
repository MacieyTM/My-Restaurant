import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Kebab",
    description: "Zawiera trzy rodzaje surówek.",
    price: 16.99,
  },
  {
    id: "m2",
    name: "Pizza",
    description: "Na grubym cieście z sosem czosnkowym lub ketchupem.",
    price: 22.99,
  },
  {
    id: "m3",
    name: "Zapiekanka",
    description: "Z serem żółtym i pieczarkami.",
    price: 7.99,
  },
  {
    id: "m4",
    name: "Zestaw dnia",
    description:
      "Zupa: ogórkowa lub pieczarkowa. Drugie danie: łazanki lub kotlet schabowy.",
    price: 19.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
