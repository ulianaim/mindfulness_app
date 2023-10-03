import { useQuery, useMutation } from '@apollo/client'; 
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { QUERY_USER } from '../../utils/queries';
import {REMOVE_QUOTE} from '../../utils/mutations'
import Auth from '../../utils/auth'


const MyQuotes = ({ title }) => {
  let currentUsername = Auth.getProfile().data.username;
  console.log(currentUsername)
  const [userData, setUserData] = useState(null);
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: {username: currentUsername}
  });
  const [removeQuote] = useMutation(REMOVE_QUOTE)
  console.log(userData);

  useEffect(() => {
    if (!loading && !error && data && data.getUserData) {
      setUserData(data.getUserData);
    }
  }, [loading, error, data]);

  const handleRemoveQuote = async (quoteId) => {
    try {
    const token = Auth.getToken();
    if (!token) {
      console.log(token)
      return;
    }

      await removeQuote({ variables: { quoteId: quoteId}});
    } catch (err) {
      console.error(err);
    }
    window.location.reload()

  };

  if (loading){
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <h3>{title}
      {data?.user.quotes?.length ? (
        `Viewing ${data.user.quotes.length} saved 
        ${data.user.quotes.length === 1 ? 'quote' : 'quotes'}:`
      ) : ( 'You have not added any quotes!')}
      </h3>
      {data?.user.quotes?.map((quote) => (
          <div key={quote._id} className="card mb-3">
           
            <div className="card-body bg-light p-2">
              <p>"{quote.quoteText}"</p>
            </div>
            
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/quotes/${quote._id}`}
            >
            </Link>
            <h4 className="card-header bg-primary text-light p-2 m-0">
              <span style={{ fontSize: '1rem' }}>
                was added on {quote.createdAt}
              </span>
            </h4>
            <button onClick={() => handleRemoveQuote(quote._id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default MyQuotes;


