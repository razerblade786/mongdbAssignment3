const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const UserSchema = new Schema({
   firstName: String,
   lastName: String, 
   email: String, 
   username: String, 
   password: String
});
mongoose.model('User', UserSchema);

require('../../app/controllers/users.server.controller');
module.exports = function(app) { 
   app.route('/users')
      .post(users.create)
      .get(users.list);
};


