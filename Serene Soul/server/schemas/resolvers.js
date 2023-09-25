const { User } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not Logged in");
    }
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
    if (!user) {
      throw new AuthenticationError("incorrect credentials");
    } const correctPass = await user.isCorrectPassword(password);
    if (!correctPass) {
      throw new AuthenticationError("Incorrect credentials");
    }
    const token = signToken(user);
    return { token, user };
    },
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    addQuote: async (parent, { body }, context ) => {
      if (context.user) {
        const updatedUser = await User.create(
          { _id: context.user._id },
          { $addToSet: { addQuoteInput: body }},
          { new: true }
        );
        return updatedUser;
      }
    },
    updateQuote: async (parent, { body }, context ) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { updateQuoteInput: body }},
            { new: true } 
            );
            return updatedUser;
        }
    },
    deleteQuote: async (parent, { quoteId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { quotes: { _id: quoteId } } },
        { new: true },
        )
      return updatedUser;
        };
    },
  },
};

module.exports = resolvers;