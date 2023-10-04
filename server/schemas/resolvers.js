const { AuthenticationError } = require('apollo-server-express');
const { User, Quote } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate('quotes');
    },
    quotes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return await Quote.find(params).sort({ createdAt: -1 });
    },
    quote: async (parent, { quoteId }) => {
      return await Quote.findOne({ _id: quoteId });
    },
    myQuote: async (parent, { username }) => {
      console.log(username)
      let userData = await User.findOne({ username }).populate('quotes');
      console.log(userData.quotes);
      return userData.quotes;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      if (!username || !email || !password) {
        throw new Error("username, email, and password are required.")};
      const user = await User.create({ username, email, password });
      const token = signToken(user); 
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addQuote: async (parent, { username, quoteText, quoteAuthor, createdAt }) => {
      const user = await User.findOne({username});


      const quote = await Quote.create({ quoteText, quoteAuthor, createdAt });

    //   await User.findOneAndUpdate(
    //     { username: quoteText, quoteAuthor },
    //     { $addToSet: { quotes: quote._id } }
    //   );
    user.quotes.push(quote._id);
    await user.save()

      return quote;
    },
    removeQuote: async (parent, { quoteId }) => {
      return Quote.findOneAndDelete({ _id: quoteId });
    },
    updateQuote: async (parent, { quoteId, quoteText, quoteAuthor }) => {
       const quote = await Quote.findOneAndUpdate({ quoteId, quoteText});
        await Quote. findOneAndUpdate(
            {username: quoteAuthor},
            {$addToSet: { quotes: quote._id}}
        )
      return quote;
    },
  },
};

module.exports = resolvers;
