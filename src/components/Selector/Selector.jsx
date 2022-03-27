import { useEffect, useState } from 'react';
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import './Selector.scss';

const Selector = () => {
  const [value, setValue] = useState('Company');
  const [dropDown, setDropDown] = useState(false);
  let [percentage, setPercentage] = useState(3);

  let perMinus = () => {
    if (percentage > 2) {
      let per = percentage - 1;
      setPercentage(per);
    }
  };

  let perPlus = () => {
    if (percentage < 100) {
      let per = percentage + 1;
      setPercentage(per);
    }
  };

  return (
    <>
      <div className="selector" onClick={() => setDropDown(!dropDown)}>
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
        <AiOutlineMinus onClick={perMinus} />
        <p>{percentage}%</p>
        <AiOutlinePlus onClick={perPlus} />
      </div>
    </>
  );
};

export default Selector;

{
  /* <select className="select" name="names" id="names">
    <option selected disabled>
      Company
    </option>
    <option value="Apple">Apple</option>
    <option value="Apple">Google</option>
    <option value="Apple">Skype</option>
    <option value="Apple">Microsoft</option>
  </select> */
}
