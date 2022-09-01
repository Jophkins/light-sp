import React, {useContext} from 'react';
import styles from './Admin.module.scss';
import CreateType from "../../components/modals/CreateType";
import CreateProduct from "../../components/modals/CreateProduct";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";

const AdminPage = () => {
  const navigate = useNavigate();
  const {user} = useContext(Context);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    navigate('/light-sp/');
  }

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <CreateType/>
            <CreateProduct/>
          </div>
          <div className="col-12 col-md-6">
            <button className="btn btn-outline-primary" onClick={() => logOut()}> Выйти </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminPage;
