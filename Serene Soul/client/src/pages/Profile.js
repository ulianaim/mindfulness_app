import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import QuotesForm from "../components/QuotesForm";
import QuotesList from '../components/QuotesList';
import { QUERY_QUOTES } from '../utils/queries';

const Profile = () => {
  const {username} = useParams() 
  const { loading, data } = useQuery(QUERY_QUOTES);
    const quotes = data?.quotes || [];

    return (
        <main>
        
          <div className="flex-row justify-center">
            <div className="card">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                <QuotesForm/>
                <QuotesList
              quotes={quotes}
              title="My saved Quotes"
            />

                </>
              )}
            </div>
          </div>
        </main>
      );
    };

export default Profile