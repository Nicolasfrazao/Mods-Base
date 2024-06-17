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
  type Query {
    getPosts: [Post]

    getPost(id: ID!): Post

    getUser: [User]!

    getUser(id: username): User!

    getOrganization: [Organization]!

    getOrganization(id: username): User!
  }

  // The Mutation type defines the available mutations on our GraphQL server.
  // Each mutation is defined as a field with a name and a return type.
  // Mutations are used to modify data on the server.
  type Mutation {
    createPost(input: PostInput): Post

    updatePost(id: ID!, input: PostInput): Post

    deletePost(id: ID!): Post

    createMod

    deleteMod

    updateMod

    createOrganization

    deleteOrganization

    addMemberToOrganization

    deleteMemberToOrganization

    likePost

    likeMod(modId: ModId): ModId

    likeOrganization(orgId: OrganizationId): Organization!

    likeUser(userId: UserId): User!

    register(registerInput: RegisterInput): User!

    login(
      username: String!
      password: String!
      email: String!
      otp: int!
    ): User!
  }

  // The Subscription type defines the available subscriptions on our GraphQL server.
  // Each subscription is defined as a field with a name and a return type.
  // Subscriptions allow clients to receive real-time updates from the server.
  type Subscription {
    newPost: Post!

    newMod: Mod!

    newMessage: Message
  }
`
