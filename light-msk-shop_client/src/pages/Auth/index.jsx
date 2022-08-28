import React from 'react';

import styles from './Auth.module.scss';

const Auth = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="row g-3 justify-content-center">
              <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                <input type="text" readOnly className="form-control-plaintext" id="staticEmail2"
                       value="admin@gmail.com" />
              </div>
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-secondary mb-3">Confirm identity</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
);
};

export default Auth;
