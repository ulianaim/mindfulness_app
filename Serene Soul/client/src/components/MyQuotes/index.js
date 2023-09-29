import { useQuery } from '@apollo/client'; 
import React from 'react';
import { Link } from 'react-router-dom';
import { QUERY_MY_QUOTES } from '../../utils/queries';

const MyQuotes = ({ quotes, title }) => {
  const { loading, data } = useQuery(QUERY_MY_QUOTES);
  // if (!quotes.length) {
  //   return <h3>No Quotes Yet</h3>;
  // }

  return (
    <div>
      <h3>{title}</h3>
      {quotes &&
        quotes.map((quote) => (
          <div key={quote._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
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

export default MyQuotes;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client'; // Import useQuery from Apollo Client
// import { QUERY_MY_QUOTES } from '../../utils/queries';

// const MyQuotes = () => {
//   // Fetch data using useQuery
//   const { loading, data } = useQuery(QUERY_MY_QUOTES);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Destructure the quotes data from the GraphQL response
//   const { quotes } = data;

//   return (
//     <div>
//       <h3>My Quotes</h3>
//       {quotes.length === 0 ? (
//         <h4>No Quotes Yet</h4>
//       ) : (
//         quotes.map((quote) => (
//           <div key={quote._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//               <span style={{ fontSize: '1rem' }}>
//                 Added this quote on {quote.createdAt}
//               </span>
//             </h4>
//             <div className="card-body bg-light p-2">
//               <p>{quote.quoteText}</p>
//             </div>
//             <Link
//               className="btn btn-primary btn-block btn-squared"
//               to={`/quotes/${quote._id}`}
//             >
//               View Quote
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyQuotes;
