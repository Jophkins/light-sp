const {Order, OrderInfo, Product, ProductInfo, Type} = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderController {
  async create(req, res, next) {
    try {
      let {phone, customerName, status, totalPrice, info} = req.body;

      const order = await Order.create({phone, customerName, status, totalPrice});

      if (info) {
        info = JSON.parse(info);
        info.forEach(i => OrderInfo.create({
          quantity: i.quantity,
          name: i.name,
          price: i.price,
          orderId: order.id
        }))
      }

      return res.json(order);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const orders = await Order.findAll();
    return res.json(orders);
  }
}

module.exports = new OrderController();
