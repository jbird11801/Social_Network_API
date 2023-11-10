const { Schema, model } = require('mongoose');

const { Reaction } = require('Reaction');

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

    username : { 
      
      type : String ,

      required : true 

    },

    reactions : [Reaction]

  }

  ,

  {

    toJSON: {

      virtuals: true

    },

  }

);

userSchema.virtual('reactionCount').get(function () {

  return this.reactions.length;

});

const thought = model('course', courseSchema);

module.exports = thought;
