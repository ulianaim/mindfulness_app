import { useQuery, useMutation } from '@apollo/client'; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { QUERY_MY_QUOTES } from '../../utils/queries';
import {REMOVE_QUOTE} from '../../utils/mutations'
import Auth from '../../utils/auth'


const MyQuotes = ({ title }) => {
  const [userData, setUserData] = useState(null);
  const { loading, error, data } = useQuery(QUERY_MY_QUOTES);
  const [removeQuote] = useMutation(REMOVE_QUOTE)

  useEffect(() => {
    if (!loading && !error && data && data.getUserData) {
      setUserData(data.getUserData);
    }
  }, [loading, error, data]);

  const handleRemoveQuote = async (quoteId) => {
    try {
    const token = Auth.getToken();
    if (!token) {
      return;
    }

      await removeQuote({ variables: { quoteId: quoteId}});
    } catch (err) {
      console.error(err);
    }
  };

  if (loading){
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <h3>{title}
      {userData?.quotes?.length ? (
        `Viewing ${userData.quotes.length}'s saved 
        ${userData.quotes.length === 1 ? 'quote' : 'quotes'}:`
      ) : ( 'You have not added any quotes!')}
      </h3>
      {userData?.quotes?.map((quote) => (
          <div key={quote._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              <span style={{ fontSize: '1rem' }}>
                added this quote on {quote.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{quote.quoteText}</p>
            </div>
            <button onClick={() => handleRemoveQuote(quote._id)}>Delete</button>
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

export default MyQuotes;


