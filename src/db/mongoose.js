const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})



// const task = new Task({
//   description: '  Challenge time2  ',
// })

// task.save().then(() => {
//   console.log(task)
// }).catch((error) => {
//   console.log('Error', error)
// })

// const me = new User({
//   name: '  Crystal  ',
//   email: 'brianMY@Gmail.com     ',
//   age: 10,
//   password: 'jfido1'
// })

// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//   console.log('Error', error)
// })