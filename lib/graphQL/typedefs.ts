import { typeDefs } from ".";
// This file contains the TypeDefs for our GraphQL server.
// TypeDefs define the types of data that our GraphQL server can serve.

import { gql } from "apollo-server";

// The Query type defines the available queries on our GraphQL server.
// Each query is defined as a field with a name and a return type.
// The return type is defined using GraphQL types such as scalar types and object types.
// Scalar types represent primitive values such as strings, integers, and booleans.
// Object types represent complex objects that can be composed of other types.
// The ! after a type means that the field is required.
module.exports = gql`

  type Game {}

  type Category {}

  type User {

    id: ID!

    name: String!

    username: String!

    email: String!

    password: String!

    token: String!

    createdAt: String!

    likes: [Like]

    mods: [Mod]
  }

  type Like {

    id: ID!

    createdAt: String!

    username: String!
  }

  type Comment {

    id: ID!

    body: String!

    createdAt: String!

    username: String!

    like: [Like]!
  }

  type Mod {

    id: ID!

    name: String!

    description: String!

    avatar: String!

    banner: String!

    like: [Like]!

    likeCount: Number!

    size: Number!

    version: String!

    from: User || Organization!

    game: Game!

    category: String!

    createdAt: String!

    lastUpdate: String!

    tags: [String]!

  }

  type Post {

    id: ID!

    title: String!

    content: String!

    image: String!

    video: String!

    createdAt: String!

    comments: [Comment]!

    from: User || Organization!
  }

  type Organization {

    id: ID!

    name: String!

    description: String!

    avatar: String!

    banner: String!

    games: String!

    email: String!

    website: String!

    location: String!

    password: String!

    token: String!

    posts: [Post]

    followers: [User]

    mods: [Mod]

    following: Int!

    likes: [like]

    likeCount: Number!

    comments: [Comment]

    followers: [User]

    members: [User]

    createdAt: String!
  }

  type Query {
    getPosts: [Post]

    getPost(id: ID!): Post

    getUser: [User]!

    getUser(id: username): User!

    getOrganization: [Organization]!

    getOrganization(id: username): User!
  }

  type Mutation {
    createPost(input: PostInput): Post!

    updatePost(id: ID!, input: PostInput): Post!

    deletePost(id: ID!): Post!

    createMod(body: mod!): Mod!

    deleteMod(modId: modId!): String!

    updateMod(modId: ModId!): Mod!

    createOrganization(userId: ID!): Organization!

    deleteOrganization(organizationId: ID!): Organization!

    addMemberToOrganization(organizationId: ID!, userId: ID!): User!

    deleteMemberToOrganization(organizationId: ID!, userId: ID!): User!

    likePost(postId: ID!): Post!

    likeMod(modId: ModId!): Mod!

    likeOrganization(orgId: OrganizationId!): Organization!

    likeUser(userId: UserId!): User!

    register(registerInput: RegisterInput): User!

    login(
      username: String!
      password: String!
      email: String!
      otp: int!
    ): User!
  }

  type Subscription {
    newPost: Post!

    newMod: Mod!

    newMessage: Message
  }
`;
