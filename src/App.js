import React from 'react';
import { Main } from './components/Main';
import { AlbumLayout } from './components/AlbumLayout/AlbumLayout';
import { AlbumProvider } from './context/provider';
import './App.less';

function App() {
  return (
    <div className='App'>
      <AlbumProvider>
        <AlbumLayout>
          <Main />
        </AlbumLayout>
      </AlbumProvider>
    </div>
  );
}

export default App;
