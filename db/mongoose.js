const mongoose = require('mongoose');

// ? mLab URL: https://www.mlab.com/databases/heroku_g0j2hnxz/collections/users?saved=1567775813397&q=&s=&f=&pageSize=10&pageNum=0

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
}, (err) => {
  if (err) {
    console.warn("mongoose.connect: err", err);
    return;
  }
  
  console.log('mongoose.connect: Successfully connected to MongoDB instance');
  
});

mongoose.set('useCreateIndex', true);

module.exports = { mongoose };