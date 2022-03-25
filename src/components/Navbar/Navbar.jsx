import './Navbar.scss';
import { MdSpaceDashboard } from 'react-icons/md';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">LOGO</div>

        <div className="navbar__menu">
          <h4 className="navbar__menu-heading"> MANAGE </h4>
          <ul className="navbar__menu-list">
            <li className="navbar__menu-item navbar__menu-item-active">
              <MdSpaceDashboard className="navbar__menu-logo" />
              <a href="#">Dashboard</a>
            </li>
            <li className="navbar__menu-item">
              <AiOutlineAppstoreAdd className="navbar__menu-logo" />
              <a href="#">Create Pie</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
