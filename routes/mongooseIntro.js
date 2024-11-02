const mongoose = require('mongoose');

(async function () {
  try {
    mongoose.connect('mongodb://localhost:27017/chat');
    console.log('Connection to MongoDb Ok');

    const taskSchema = mongoose.Schema({ body: String });
    const Task = mongoose.model('Task', taskSchema);

    // const newTask = { body: 'Go for a walk' };

    // CREATE
    // const createdTask = await Task.create(newTask);

    // SELECT
    // const getAllTasks = await Task.find();
    // const foundTask = await Task.findById('672631511927aadc5ef6d84e');

    // UPDATE
    // const updatedTask = await Task.findByIdAndUpdate(
    //   '672631511927aadc5ef6d84e',
    //   { body: 'Watch TV Show' },
    //   { new: true } // if true, return the modified document rather than the original
    // );

    const deletedTask = await Task.findByIdAndDelete(
      '672631511927aadc5ef6d84e'
    );

    console.log(deletedTask);
  } catch (err) {
    console.log(err);
  }
})();
