import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: '1',
    name: 'pizza',
    description: 'better than italian pizza',
    price: 30,
  },
  {
    id: '2',
    name: 'Burger',
    description: 'better than burgerking',
    price: 1.5,
  },
  {
    id: '3',
    name: 'steak',
    description: 'cow steak',
    price: 25,
  },
  {
    id: '4',
    name: 'spaghetti',
    description: 'delicious spaghetti',
    price: 16,
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
