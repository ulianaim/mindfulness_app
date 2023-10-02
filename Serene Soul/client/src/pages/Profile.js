import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import QuotesForm from "../components/QuotesForm";
import QuotesList from '../components/QuotesList';
import { QUERY_QUOTES } from '../utils/queries';
import {QUERY_MY_QUOTES} from '../utils/queries';
import MyQuotes from '../components/MyQuotes';

const Profile = () => {
  const {username} = useParams() 
  const { loading, data } = useQuery(QUERY_MY_QUOTES);
    const quotes = data?.myQuote || [];

    return (
        <main>
        
          <div className="flex-row justify-center">
            <div className="card">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                <QuotesForm/>
                <MyQuotes
              // quotes={quotes}
              // title="My Quotes"
            />

                </>
              )}
            </div>
          </div>
        </main>
      );
    };

export default Profile