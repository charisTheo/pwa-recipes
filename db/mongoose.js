const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
}, (err) => {
  if (err) {
    console.warn("mongoose.connect: err", err);
    return;
  }

  console.log('mongoose.connect: Successfully connected to MongoDB instance!');
  
});

module.exports = { mongoose };