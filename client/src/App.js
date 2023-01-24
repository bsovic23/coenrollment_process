import React from 'react';

// Import Page/Tab components here
import Homepage from './components/Homepage';

/*
import Login from './components/Login';
import Questions from './components/Questions';
import Search from './components/Search-Participant';
import Homepage from './components/Homepage';
import Homepage from './components/Homepage';
*/

// Import Re-used pieces here
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
  <section>
    <header>
      < Header />
      < Navbar />
    </header>

    <body>
      < Homepage />
    </body>

    <footer>
      < Footer />
    </footer>
  </section>
  );
}

export default App;
