const { Schema } = require('mongoose');

const quoteSchema = new Schema({
    message: {
        type: String
    },
    author: {
        type: String
    }, 
});

module.exports = quoteSchema;