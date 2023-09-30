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
          username: "", 
          quoteText,
          quoteAuthor: Auth.getProfile().data.username,
        },
      });

    } catch (err) {
      console.error(err);
    }
    window.location.reload()
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
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="Quote"
                placeholder="Quote"
                value={quoteText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
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