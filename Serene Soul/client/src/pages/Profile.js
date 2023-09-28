
import { useQuery } from '@apollo/client';
import MyQuotes from "../components/MyQuotes";
import QuotesForm from "../components/QuotesForm";

const Profile = () => {
    const { loading } = useQuery();
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