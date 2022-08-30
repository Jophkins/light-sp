import React, {useContext, useState} from 'react';
import {Context} from "../../index";

const CreateProduct = () => {
  const {product} = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', description: '', number: Date.now()}]);
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number));
  }

  return (
    <div>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropProduct">
        Добавить товар
      </button>


      <div className="modal fade" id="staticBackdropProduct" data-bs-backdrop="static" data-bs-keyboard="false"
           tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Добавить новый товар</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                  Выберите тип
                </button>
                <ul className="dropdown-menu">
                  {product.types.map(type =>
                    <li key={type.id}><span className="dropdown-item">{type.name}</span></li>
                  )}
                </ul>
              </div>

              <input type="text" placeholder="Введите название продукта"/>
              <input type="number" placeholder="Введите стоимость"/>
              <input type="file"/>

              <hr/>

              <button onClick={addInfo} className="btn btn-outline-secondary">Добавить характеристики</button>
              {info.map(i => {
                return <div key={i.number} className="row">
                  <div className="col-4">
                    <input type="text" placeholder="Введите название свойства"/>
                  </div>
                  <div className="col-4">
                    <input type="text" placeholder="Введите описание свойства"/>
                  </div>
                  <div className="col-4">
                    <button onClick={() => removeInfo(i.number)} className="btn btn-outline-danger">Удалить</button>
                  </div>
                </div>
              })}

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-outline-success">Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
