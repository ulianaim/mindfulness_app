const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const quoteSchema = new Schema({
  quoteText: {
    type: String,
    required: 'You need to leave a quote!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  quoteAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  
});

const Quote = model('Quote', quoteSchema );

module.exports = Quote;