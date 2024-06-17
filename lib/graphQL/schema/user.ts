// This file defines the schema for the User model in our MongoDB database.
// The User model represents a user in our application.

import { model, Schema } from "mongoose";

// Define the schema for the User model.
// The User model has the following fields:
// - Id: The unique identifier for the user. This is a required field.
// - Name: The name of the user. This is a required field.
// - UserName: The username of the user. This is a required field and must be unique.
// - Email: The email of the user. This is a required field and must be unique.
// - Password: The password of the user. This is a required field.
// - LikedMods: The IDs of the mods that the user has liked. This is an array of ObjectIds that reference the Mod model.
// - friends: The IDs of the users that the user is friends with. This is an array of ObjectIds that reference the User model.

const userSchema = new Schema({
  Id: {
    type: String, // The type of the Id field is a string.
    required: true, // The Id field is required.
    unique: true, // The Id field must be unique.
  },
  Name: {
    type: String, // The type of the Name field is a string.
    required: true, // The Name field is required.
  },
  UserName: {
    type: String, // The type of the UserName field is a string.
    required: true, // The UserName field is required.
    unique: true, // The UserName field must be unique.
  },
  Email: {
    type: String, // The type of the Email field is a string.
    required: true, // The Email field is required.
    unique: true, // The Email field must be unique.
  },
  Password: {
    type: String, // The type of the Password field is a string.
    required: true, // The Password field is required.
  },
  LikedMods: [{ type: Schema.Types.ObjectId, ref: "Mod" }], // The LikedMods field is an array of ObjectIds that reference the Mod model.
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }], // The friends field is an array of ObjectIds that reference the User model.
});

// Create and export the User model using the defined schema.
// The User model represents a user in our application and can be used to interact with the database.
export const User = model("User", userSchema);
