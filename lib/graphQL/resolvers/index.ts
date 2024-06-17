

export const resolvers = {
  Mods: {
    likeCount: ( parent ) => parent.likes.length,
    commentCount: ( parent ) => parent.comments.length,
  },
  Post: {
    likeCount: ( parent ) => parent.likes.length,
    commentCount: ( parent ) => parent.comments.length
  },
  Query: {
    ...postsResolvers.Query,
    ...modsResolvers.Query,
    ...usersResolvers.Query
  },
  Mutation: {
    ...postsResolvers.Mutation,
    ...modsResolvers.Mutation,
    ...usersResolvers.Mutation,
    ...commentsResolver.Mutation,
    ...organizationResolvers.Mutation
  },

  Subscription: {
    ...postsResolvers.Subscription
    ...modsResolvers.Subscription
  }
};
