import React from 'react';
import { useQuery } from '@apollo/client';
import QuotesList from '../components/QuotesList';
import { QUERY_QUOTES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_QUOTES);
  const quotes = data?.quotes || [];


  return (
    <main>
      TEST
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <QuotesList
              quotes={quotes}
              title="Your daily Quotes"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;