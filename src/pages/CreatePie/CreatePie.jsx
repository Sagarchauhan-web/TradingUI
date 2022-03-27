import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Header from '../../components/Header/Header';
import Selector from '../../components/Selector/Selector';
import './CreatePie.scss';

const CreatePie = () => {
  const [rows, setRows] = useState([]);

  const generateId = () => {
    let id = uuid().slice(0, 8);
    return { id };
  };

  const addRow = () => {
    const object = generateId();
    setRows([...rows, object]);
  };

  const deleteRow = (id) => {
    setRows((prevState) => prevState.filter((_id) => _id !== id));
  };

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
            {rows.map((id) => {
              return (
                <div className="table__data-item">
                  <Selector />
                  <div className="table__data-item-function">
                    <div
                      className="table__data-item-delete"
                      onClick={() => deleteRow(id)}
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
          <div className="pie" onClick={addRow}>
            <AiOutlinePlus />
            <div className="pie__heading pie__add">Add</div>
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
