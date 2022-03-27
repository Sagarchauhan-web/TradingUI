import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import {
  closeAllOptions,
  Percentage,
  toggleDropDown,
} from '../../redux/slices/pieSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Selector.scss';

const Selector = ({ id }) => {
  const [value, setValue] = useState('Company');
  const dispatch = useDispatch();

  const dropDown = useSelector((state) =>
    state.pie.find((val) => val.id === id),
  ).dropDown;

  let percentage = useSelector((state) =>
    state.pie.find((val) => val.id === id),
  ).percentage;

  return (
    <>
      <div
        className="selector"
        onClick={() => {
          if (!dropDown) {
            dispatch(closeAllOptions());
          }
          dispatch(toggleDropDown(id));
        }}
      >
        <div className="selected">
          {value}
          <IoMdArrowDropdown />
        </div>
        <ul className={dropDown ? '' : 'selector__list-hidden'}>
          <li onClick={() => setValue('Apple')}>
            <img src="./images/google.png" alt="google" /> Apple
          </li>
          <li onClick={() => setValue('Google')}>
            <img src="./images/google.png" alt="google" />
            Google
          </li>
          <li onClick={() => setValue('Skype')}>
            <img src="./images/google.png" alt="google" />
            Skype
          </li>
        </ul>
      </div>

      <div className=" stock__percentage">
        <AiOutlineMinus
          onClick={() => dispatch(Percentage({ operation: 'minus', id }))}
        />
        <p>{percentage}%</p>
        <AiOutlinePlus
          onClick={() => dispatch(Percentage({ operation: 'plus', id }))}
        />
      </div>
    </>
  );
};

export default Selector;
