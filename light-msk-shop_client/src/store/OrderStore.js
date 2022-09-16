import {makeAutoObservable} from "mobx";

export default class OrderStore {
  constructor() {
    this._orders = [
      {id: 1, phone: '+70000000000', status: 'OPEN'},
      {id: 2, phone: '+79999999999', status: 'OPEN'},
      {id: 3, phone: '+78888888888', status: 'CLOSED'},
      {id: 4, phone: '+79998887777', status: 'OPEN'},
    ]
    makeAutoObservable(this)
  }

  setOrders(orders) {
    this._orders = orders
  }

  get orders() {
    return this._orders
  }

}
