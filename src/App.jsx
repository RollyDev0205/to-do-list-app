
import React, { useState } from 'react'
import Header from './components/Header';
import TodosList from './components/TodosList'

function App() {

  return (
    <div className='list-card'>
      <Header />
      <TodosList />
    </div>
  );
}

export default App
