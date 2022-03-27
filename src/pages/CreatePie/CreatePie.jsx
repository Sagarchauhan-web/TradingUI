import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRow } from '../../redux/slices/pieSlice';
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai';
import Header from '../../components/Header/Header';
import Selector from '../../components/Selector/Selector';
import './CreatePie.scss';
import { addRow } from '../../redux/slices/pieSlice';

const CreatePie = () => {
  const rows = useSelector((state) => state.pie);
  const dispatch = useDispatch();

  console.log(rows);
  return (
    <div className="content">
      <Header title={'Create Pie'} />
      <div className="table__container">
        <div className="table">
          <div className="table__heading">Stock added</div>
          <div className="table__title">
            <div className="table__title-item">
              <p className="table__title-item-name">Name</p>
              <div className="table__title-item-values stock__percentage mod">
                <p>Percentage</p>
              </div>
              <div className="table__dummy"></div>
            </div>
          </div>
          <div className="table__data">
            {rows.map((item) => {
              return (
                <div className="table__data-item" key={item.id}>
                  <Selector id={item.id} />
                  <div className="table__data-item-function">
                    <div
                      className="table__data-item-delete"
                      onClick={() => dispatch(deleteRow(item.id))}
                    >
                      <AiFillDelete />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="btn__container">
          <div className="pie">
            <AiOutlinePlus />
            <div
              className="pie__heading pie__add"
              onClick={() => dispatch(addRow())}
            >
              Add
            </div>
          </div>

          <a href="#" className="pie__create pie__submit">
            <h5>Submit</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreatePie;

// const generateId = () => {
//   let id = uuid().slice(0, 8);
//   return { id };
// };

// const addRow = () => {
//   const object = generateId();
//   setRows([...rows, object]);
// };

// const [rows, setRows] = useState([]);

// const deleteRow = (id) => {
//   setRows((prevState) => prevState.filter((_id) => _id !== id));
// };
