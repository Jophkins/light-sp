import {makeAutoObservable} from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Бра'},
      {id: 2, name: 'Торшеры'}
    ]
    this._products = [
      {id: 1, name: 'Бра 1113/11 White', price: 27856, img: 'https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A1292AP-1AB.jpg'},
      {id: 2, name: 'Бра 1113/12 White', price: 28755 , img: 'https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A5213AP-1BR_14764_med.jpg'},
      {id: 3, name: 'Бра 1113/13 White', price: 26799, img: 'https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A9310AP-1WG_7719_med.jpg'},
      {id: 4, name: 'Бра 1113/14 White', price: 34500 , img: 'https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/A7005AP-1SS_86762_med.jpg'},
      {id: 5, name: 'Бра 1113/15 White', price: 27999 , img: 'https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/a1408ap-1bk_2fd5f04f14c31abddfab04a32ac430ee_1_med.jpg'},
    ]
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
