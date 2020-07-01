import React from 'react';
import Form from './Form/Form';
import RightRail from './RightRail';

import '../App.css';

function Checkout() {
  return (
    <div className="App">
          <div className="two-column-grid">    
            <main>
              <form>
                <Form />          
              </form>
            </main>
            <RightRail />
        </div>
    </div>
  );
}

export default Checkout;
