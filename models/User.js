const { Schema, model } = require('mongoose');
const { thought } = require('thought');

// Schema to create Student model
const userSchema = new Schema(
  {

    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
    },

    thought: [thought.Types.ObjectId],

    friends: [User.Types.ObjectId]

  },

  {

    toJSON: {

      virtuals: true

    },

  }

);

userSchema.virtual('friendCount').get(function () {

  return this.friends.length;

});

const User = model('User', userSchema);

module.exports = User;
