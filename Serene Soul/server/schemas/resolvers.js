const { Affirmation, Quote, User } = require('../models');

const resolvers = {
  Query: {
    affirmations: async () => {
      return Affirmation.find();
    },

    affirmation: async (parent, { affirmationId }) => {
      return Affirmation.findOne({ _id: affirmationId });
    },
    quotes: async () => {
        return Quote.find();
      },
  
      quote: async (parent, { quoteId }) => {
        return Quote.findOne({ _id: quoteId });
      },
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
  },

  Mutation: {
    addAffirmation: async (parent, { affirmationText, affirmationAuthor }) => {
      return Affirmation.create({ affirmationText, affirmationAuthor });
    },
    addQuote: async (parent, { quoteText, quoteAuthor }) => {
        return Quote.create({ quoteText, quotenAuthor });
      },
      addUser: async (parent, { firstName, lastName, email, userName, password }) => {
        return User.create({ firstName, lastName, email, userName, password });
      },
 
    removeAffirmation: async (parent, { affirmationId }) => {
      return Affirmation.findOneAndDelete({ _id: affirmationId });
    },
    removeQuote: async (parent, { quoteId }) => {
        return Quote.findOneAndDelete({ _id: quoteId });
      },
      removeUser: async (parent, { userId }) => {
        return User.findOneAndDelete({ _id: userId });
      },
  },
};

module.exports = resolvers;
