// This file defines the schema for the Mod model in our MongoDB database.
// The Mod model represents a mod in our application.

// Field: id (String, required)
// The unique identifier for the Mod. This is a required field.
// The id is the primary key of the Mod and it must be unique.

// Field: name (String, required)
// The name of the Mod. This is a required field.
// The name is used to identify the Mod and it must be unique.

// Field: image (Image, required)
// The image object that contains the url of the image. This is a required field.

// Field: video (String, optional)
// The url of the mod's video. This is an optional field.

// Field: description (String, required)
// A brief description of the Mod. This is a required field.
// The description is used to provide a summary of the Mod's content.

// Field: avatar (String, required)
// The URL of the Mod's avatar image. This is a required field.
// The avatar image is used to represent the Mod visually.

// Field: banner (String, required)
// The URL of the Mod's banner image. This is a required field.
// The banner image is used to promote the Mod on the platform.

// Field: link (String, required)
// The URL of the Mod's website or profile page. This is a required field.
// The link is used to access the Mod's website or profile page.

// Field: website (String, required)
// The URL of the Mod's website. This is a required field.
// The website is used to access the Mod's official website.

// Field: location (String, required)
// The location of the Mod. This is a required field.
// The location is used to provide information about where the Mod is based.

// Field: followers (Array of Users, required)
// The number of followers the Mod has. This is a required field.
// The followers field is used to keep track of the users who are following the Mod.

// Field: following (Number, required)
// The number of users the Mod is following. This is a required field.
// The following field is used to keep track of the number of users the Mod is following.

// Field: posts (Number, required)
// The number of posts the Mod has created. This is a required field.
// The posts field is used to keep track of the number of posts the Mod has created.

// Field: likes (Number, required)
// The number of likes the Mod has received. This is a required field.
// The likes field is used to keep track of the number of likes the Mod has received.

// Field: likedBy (ObjectId, ref: "User")
// The ID of the user who liked the Mod. This is a required field.
// The likedBy field is used to keep track of the user who liked the Mod.

// Field: comments (Number, required)
// The number of comments the Mod has received. This is a required field.
// The comments field is used to keep track of the number of comments the Mod has received.

// Field: comment (Array of ObjectIds, ref: "Comment")
// The IDs of the comments the Mod has received. This is an optional field.
// The comment field is used to keep track of the comments the Mod has received.

// Field: category (Array of ObjectIds, ref: "Category")
// The IDs of the categories the Mod belongs to. This is an optional field.
// The category field is used to categorize the Mod.

// Field: game (ObjectId, ref: "Game")
// The ID of the game the Mod is associated with. This is an optional field.
// The game field is used to associate the Mod with a game.

// Field: size (Number, required)
// The size of the Mod. This is a required field.
// The size field is used to provide information about the size of the Mod.

// Field: type (String, required)
// The type of the Mod. This is a required field.
// The type field is used to provide information about the type of the Mod.

// Field: language (String, required)
// The language of the Mod. This is a required field.
// The language field is used to provide information about the language of the Mod.

// Field: version (String, required)
// The version of the Mod. This is a required field.
// The version field is used to provide information about the version of the Mod.

// Field: changelog (String)
// The changelog of the Mod. This is an optional field.
// The changelog field is used to provide information about the changes made in each version of the Mod.

// Field: platforms (String, required)
// The platforms the Mod is compatible with. This is a required field.
// The platforms field is used to provide information about the platforms the Mod is compatible with.

// Field: status (String, required)
// The status of the Mod. This is a required field.
// The status field is used to provide information about the status of the Mod.

// Field: tags (String, optional)
// The tags associated with the Mod. This is an optional field.
// The tags field is used to provide information about the tags associated with the Mod.

// Field: created (Date, required)
// The date the Mod was created. This is a required field.
// The created field is used to provide information about the date the Mod was created.

// Field: lastUpdate (Date, required)
// The date the Mod was last updated. This is a required field.
// The lastUpdate field is used to provide information about the date the Mod was last updated.

// Field: donwloads (Number, required)
// The number of times the Mod has been downloaded. This is a required field.
// The donwloads field is used to keep track of the number of times the Mod has been downloaded.

// Field: requirements (String, required)
// The requirements for the Mod. This is a required field.
// The requirements field is used to provide information about the requirements for the Mod.

// Field: createdAt (Date, required)
// The date the Mod was created in the database. This is a required field.
// The createdAt field is used to provide information about the date the Mod was created in the database.

// Field: from (Array of ObjectIds, ref: "User" or "Organization")
// The IDs of the users and organizations that created the Mod. This is an optional field.
// The from field is used to keep track of the users and organizations that created the Mod.

import { model, Schema } from "mongoose";

const modSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: Image, required: true },
  video: { type: String, required: false },
  description: { type: String, required: true },
  avatar: { type: String, required: true },
  banner: { type: String, required: true },
  link: { type: String, required: true },
  website: { type: String, required: true },
  location: { type: String, required: true },
  followers: { type: Schema.Types.ObjectId, ref: "User" },
  following: { type: Number, required: true },
  posts: { type: Number, required: true },
  likes: { type: Number, required: true },
  likedBy: { type: Schema.Types.ObjectId, ref: "User" },
  comments: { type: Number, required: true },
  comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  game: { type: Schema.Types.ObjectId, ref: "Game" },
  size: { type: Number, required: true },
  type: { type: String, required: true },
  language: { type: String, required: true },
  version: { type: String, required: true },
  changelog: { type: String },
  platforms: { type: String, required: true },
  status: { type: String, required: true },
  tags: { type: String, required: false },
  created: { type: Date, required: true },
  lastUpdate: { type: Date, required: true },
  donwloads: { type: Number, required: true },
  requirements: { type: String, required: true },
  createdAt: { type: Date, required: true },
  from: [{ type: Schema.Types.ObjectId, ref: "User" }] || {
    type: Schema.Types.ObjectId,
    ref: "Organization",
  },
});

export const Mod = model("Mod", modSchema);
