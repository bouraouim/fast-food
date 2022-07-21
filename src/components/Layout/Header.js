import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full bg-[#E8F5F3] h-20 flex justify-between  px-[10%]  items-center z-10">
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="bg-slate-50">
      </div>
    </Fragment>
  );
};

export default Header;
