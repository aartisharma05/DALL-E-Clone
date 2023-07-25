/*rafce- this fn generates a simple react component*/
import React from 'react';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';
const App = () => {
  return (
    /* here we're using v6 of react-router dom*/
    <BrowserRouter>
    <header className="w-full flex
     justify-between items-center bg-white
      sm:px-8 px-4 py-4 border-b border-b[#e6ebf4]">
        <Link to="/">
          <img src={ logo } alt="logo" 
          className="w-28 object-contain" />
        </Link>

    </header>
    </BrowserRouter>
  );
}

export default App;
