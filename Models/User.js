const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
    
//     username: {
//       type: String,
//       required: true,
//      unique: true,
//   trimmed: true,
//     },

//       email: {
//         type: String,
//         required: true,
//         unique: true,
//         match: [/.+@.+/, "No match found, please try again"],

    //   thoughts: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "thought",
    //     },
    //   ],
    //   friends: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "user",
    //     },
    //   ],
    // },




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
    return ` ${this.friends.length}`;
  })
  User = mongoose.model('User', userSchema);

  // example usage
  User.findOne({ name: 'John Doe' })
    .select('name friendCount')
    .then(user => {
      console.log(`${user.name} has ${user.friendCount} friends`);
    })
    .catch(err => console.log(err));

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
