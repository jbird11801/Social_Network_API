const { Schema, model } = require('mongoose');

const { Reaction } = require('Reaction');

var ObjectId = Schema.ObjectId;

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: ObjectId,
      
      default: ObjectId()
    },

    reactionBody: {
      type: String,
      required : true ,
      max:280
    },

    username : { 
      
      type : String ,

      required : true 

    },

    createdAt: {
      type: Date,
      default: Date.now(),
    },

    reactions : [Reaction]

  }

);

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;
