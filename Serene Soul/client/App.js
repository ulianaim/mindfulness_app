import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Affirmations from './pages/Affirmations';
import Quotes from './pages/Quotes';
import Header from './components/Header';
import Footer from './components/Footer';

const httpLink = createHttpLink({
    uri: '/graphql',
  });
  
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  
  function App() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
            <div>
              <Routes>
                <Route 
                  path="/"
                  element={<Home />}
                />
                <Route 
                  path="/login" 
                  element={<Login />}
                />
                <Route 
                  path="/signup" 
                  element={<Signup />}
                />
                <Route 
                  path="/me" 
                  element={<Profile />}
                />
                <Route 
                  path="/profiles/:username" 
                  element={<Profile />}
                />
                <Route 
                  path="/Affirmations" 
                  element={<Affirmations />}
                />
                <Route 
                  path="/Quotes" 
                  element={<Quotes />}
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
  
  export default App;
  