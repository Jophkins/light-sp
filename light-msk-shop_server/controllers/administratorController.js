const ApiError = require('../error/ApiError');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const {User, Basket} = require('../models/models');

// const generateJwt = (id, email, role) => {
//   return jwt.sign(
//     {id, email, role},
//     process.env.SECRET_KEY,
//     {expiresIn: '24h'}
//   );
// }

class AdministratorController {
  async registration(req, res) {

  }

  async login(req, res) {

  }

  async check(req, res, next) {
    const {id} = req.query;
    if(!id) {
      return  next(ApiError.badRequest('have no ID'))
    }
    res.json(id);
  }

}

module.exports = new AdministratorController();