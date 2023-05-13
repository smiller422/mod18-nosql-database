const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trimmed: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+/, "No match found, please try again"],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that retrieves the lenght of the user's friends array field on query.
userSchema
  .virtual("friendCount")
  // Getter
  .get(function () {
    return  this.friends.length;
  });
// User = mongoose.model("User", userSchema);


// Initialize our User model
const User = model('User', userSchema);

module.exports = User;
