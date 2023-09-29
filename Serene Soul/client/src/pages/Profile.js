import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import MyQuotes from "../components/MyQuotes";
import QuotesForm from "../components/QuotesForm";
import { QUERY_MY_QUOTES } from '../utils/queries';

const Profile = () => {
  const {username} = useParams() 
    const { loading, data } = useQuery(QUERY_MY_QUOTES, {variables: {username: username}});
    console.log(data)
    const myquotes = data?.myquotes || [];

    return (
        <main>
        
          <div className="flex-row justify-center">
            <div className="col-12 col-md-8 mb-3">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <>
                <QuotesForm/>
                <MyQuotes
                  myquotes={myquotes}
                  title="My Saved Quotes"
                />
                </>
              )}
            </div>
          </div>
        </main>
      );
    };

export default Profile