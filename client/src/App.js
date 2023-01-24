import React from 'react';

// Import Page/Tab components here
import Homepage from './components/Homepage';
import Add from './components/Add-Participant';

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

function App() {

  let component 

  switch(window.location.pathname) {
    case "/":
        component = < Homepage />
        break;
    case "/Add":
        component = < Add />
        break;
  }
  
  return (
  <section>
    <header>
      < Header />
      < Navbar />
    </header>

    <body>
      {component}
    </body>

    <footer>
      < Footer />
    </footer>
  </section>
  );
}

export default App;
