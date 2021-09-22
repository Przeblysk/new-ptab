import React from 'react'
import Search from './components/search'
import Tabs from './components/tabs'
import Styles from './index.module.scss'

const App = () => {
  return (
    <>
      <div className={Styles.mask} />
      <div className={Styles.wrapper}>
        <Search />
        <Tabs />
      </div>
    </>
  )
}

export default App
