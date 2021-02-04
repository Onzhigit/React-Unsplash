import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Collapse from './components/Collapse'


function App() {
  return (
    <div>
      <Header />
        <Collapse />
          <Search />
    </div>
  )
}

export default App;
