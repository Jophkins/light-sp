import React, {useContext} from 'react';
import styles from './Admin.module.scss';
import CreateType from "../../components/modals/CreateType";
import CreateProduct from "../../components/modals/CreateProduct";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";
import Auth from "../Auth";

const AdminPage = () => {
  const navigate = useNavigate();
  const {user} = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.clear();
    navigate('/light-sp/');
  }


  return (
    user.isAuth ?
      <div className={styles.wrapper}>

        <div className="container">

          <div className="row mt-5">
            <div className="col-12 col-md-4 text-center">
              <CreateType/>
            </div>
            <div className="col-12 col-md-4 text-center">
              <CreateProduct/>
            </div>
            <div className="col-12 col-md-4 text-end">
              <button className="btn btn-outline-primary" onClick={() => logOut()}> Выйти</button>
            </div>
            <hr className="mt-5"/>
          </div>

          <div className="row">
            <div className="ordersWrapper">
              <div className="col-12">
                orders
              </div>
            </div>
          </div>

        </div>

      </div>
      :
      <Auth/>
  );
};

export default AdminPage;
