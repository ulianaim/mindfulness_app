import React from 'react';
import { Link } from 'react-router-dom';

const QuotesList = ({ quotes, title }) => {
  if (!quotes.length) {
    return <h3>No Quotes Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {quotes &&
        quotes.map((quote) => (
          <div key={quote._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {quote.quoteAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                added this quote on {quote.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{quote.quoteText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/quotes/${quote._id}`}
            >
            </Link>
          </div>
        ))}
    </div>
  );
};

export default QuotesList;