import React from 'react';
import styles from './Admin.module.scss';
import CreateType from "../../components/modals/CreateType";
import CreateProduct from "../../components/modals/CreateProduct";

const AdminPage = () => {

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <CreateType />
        <CreateProduct />
      </div>

    </div>
  );
};

export default AdminPage;
