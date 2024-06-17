// This file defines the schema for the Organization model in our MongoDB database.
// The Organization model represents an organization in our application.

import { model, Schema } from "mongoose";

// Define the schema for the Organization model.
// The schema defines the structure and validation rules for the organization data.
const OrgSchema = new Schema( {
  // The ID of the organization. This is a required field and must be unique.
  Id: {
    type: String,
    required: true,
    unique: true
  },
  // The name of the organization. This is a required field.
  Name: {
    type: String,
    required: true
  },
  // The description of the organization. This is a required field.
  Description: {
    type: String,
    required: true
  },
  // The domain of the organization. This is a required field.
  Domain: {
    type: String,
    required: true
  },
  // The date the organization was created. This field is automatically set to the current date and time.
  CreatedAt: {
    type: Date,
    default: Date.now
  },
  // The date the organization was last updated. This field is automatically set to the current date and time.
  UpdatedAt: {
    type: Date,
    default: Date.now
  },
  // The ID of the user who owns the organization. This is a required field.
  Owner: {
    type: String,
    required: true
  },
  // The IDs of the users who are members of the organization. This is a required field.
  Members: [ {
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  // The IDs of the mods associated with the organization. This is an array of ObjectIds that reference the Mod model.
  Mods: [ {
    type: Schema.Types.ObjectId,
    ref: "Mod"
  } ],
  // The IDs of the posts associated with the organization. This is an array of strings.
  Posts: {
    type: [ String ],
    required: true
  },
  // The IDs of the users who have liked the organization. This is an array of strings.
  Likes: {
    type: [ String ],
    required: true
  }
} );

// Create and export the Organization model using the defined schema.
// The Organization model represents an organization in our application and can be used to interact with the database.
export const Organization = model( "Organization", OrgSchema );
