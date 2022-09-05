import {makeAutoObservable} from "mobx";

export default class ProductStore {
  constructor() {
    this._types = []
    this._products = []
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setProducts(products) {
    this._products = products
  }

  get types() {
    return this._types
  }
  get products() {
    return this._products
  }
}
