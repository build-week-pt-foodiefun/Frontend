import React from 'react';

import AppRouter from './components/AppRouter'

import TabNav from './components/TabNav';

function App() {

  return (
    <div className='App'>
      <main>  
        <TabNav />
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
