// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');


//User.create(name: whaterver)


// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;