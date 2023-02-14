import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Page/Tab components here
import Homepage from './pages/Homepage';
import Add from './pages/Add-Participant';
import Participants from './pages/Participants';

/*
import Login from './components/Login';
import Questions from './components/Questions';
import Search from './components/Search-Participant';
import Stats from './components/Stats';
*/

// Import Re-used pieces here
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        < Navbar />
        <div>
          <Homepage />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
