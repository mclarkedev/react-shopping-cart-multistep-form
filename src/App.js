import React from 'react';
import Header from './components/Header';
import Form from './components/Form/Form';
import ProgressBar from './components/ProgressBar';
import RightRail from './components/RightRail';

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
          <div className="two-column-grid">    
            <main>
              <ProgressBar />
              <form>
                <Form />          
              </form>
            </main>
            <RightRail />
        </div>
    </div>
  );
}

export default App;
