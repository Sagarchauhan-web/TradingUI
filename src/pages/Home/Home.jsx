import './Home.scss';
import { AiFillPieChart, AiOutlinePlus } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="content">
      <div className="header">
        <h2 className="main__title">Dashboard</h2>
      </div>
      <div className="table__container">
        <div className="table">
          <div className="table__heading">Pie Created</div>
          <div className="table__title">
            <div className="table__title-item">
              <p className="table__title-item-name">Name</p>
              <div className="table__title-item-values">
                <p>Value</p>
                <p>Gain / Return</p>
                <p>Actual / Target</p>
              </div>
              <div className="table__dummy"></div>
            </div>
          </div>
          <div className="table__data">
            <div className="table__data-item">
              <p className="table__data-item-name">Pie Name</p>
              <div className="table__data-item-values">
                <p>$242.54</p>
                <p>4%</p>
                <p>4%</p>
              </div>
              <div className="table__data-item-function">
                <div className="table__data-item-edit"></div>
                <div className="table__data-item-delete"></div>
              </div>
            </div>

            <div className="table__data-item">
              <p className="table__data-item-name">Pie Name</p>
              <div className="table__data-item-values">
                <p>$242.54</p>
                <p>4%</p>
                <p>4%</p>
              </div>
              <div className="table__data-item-function">
                <div className="table__data-item-edit"></div>
                <div className="table__data-item-delete"></div>
              </div>
            </div>

            <div className="table__data-item">
              <p className="table__data-item-name">Pie Name</p>
              <div className="table__data-item-values">
                <p>$242.54</p>
                <p>4%</p>
                <p>4%</p>
              </div>
              <div className="table__data-item-function">
                <div className="table__data-item-edit"></div>
                <div className="table__data-item-delete"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn__container">
          <div className="pie">
            <AiFillPieChart />
            <div className="pie__heading">Total Pie</div>
            <h5>5</h5>
          </div>

          <a href="#" className="pie__create">
            <AiOutlinePlus />
            <h5>Create Pie</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
