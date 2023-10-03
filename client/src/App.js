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
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        return { hasError: true };
      }
    

    
      render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children;
      }
    }
    
    return (
      <ErrorBoundary>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Header />
            <Navbar/>
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
                  path="/profile/:username" 
                  element={<Profile />}
                />
                 
              </Routes> 
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
      </ErrorBoundary>
    );
  }
  
  export default App;
  