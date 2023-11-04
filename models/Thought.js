const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min : 1 ,
      max:280
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },

  }
);

const Course = model('course', courseSchema);

module.exports = Course;
