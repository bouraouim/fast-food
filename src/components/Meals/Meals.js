import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <Fragment>
      <div className='relative top-[15%]'>
      <AvailableMeals />
      </div>
    </Fragment>
  );
};

export default Meals;
