import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import MyQuotes from "../components/MyQuotes";
import QuotesForm from "../components/QuotesForm";
import { QUERY_MY_QUOTES } from '../utils/queries';
import QuotesList from '../components/QuotesList';
import { QUERY_QUOTES } from '../utils/queries';

const Profile = () => {
  const {username} = useParams() 
  const { loading, data } = useQuery(QUERY_QUOTES);
    // const { loading, data } = useQuery(QUERY_MY_QUOTES, {variables: {username: username}});
    //console.log(data)
    // const myquotes = data?.myquotes || [];
    const quotes = data?.quotes || [];

    return (
        <main>
        
          <div className="flex-row justify-center">
            <div className="col-12 col-md-8 mb-3">
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