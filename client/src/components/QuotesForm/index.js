import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_QUOTE } from '../../utils/mutations';
import Auth from '../../utils/auth';

const QuoteForm = () => {
  const [quoteText, setQuoteText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addQuote, { error }] = useMutation(ADD_QUOTE, {
   

  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addQuote({
        variables: {
          username: Auth.getProfile().data.username, 
          quoteText,
          quoteAuthor: Auth.getProfile().data.username,
        },
      });
      window.location.reload()
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'Quote' && value.length <= 280) {
      setQuoteText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Add your favorite quote</h3>
      
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="form-container justify-center">
              <textarea className="form-input"
                name="Quote"
                placeholder="Quote"
                value={quoteText}
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-container">
              <button className="btn btn-block btn-primary" type="submit">
                Add 
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
    </div>
  );
};

export default QuoteForm;