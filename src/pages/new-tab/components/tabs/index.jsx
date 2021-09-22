import React, { useState, useEffect } from 'react'
import data from './data'
import Styles from './index.module.scss'

const Tabs = () => {
  useEffect(() => {
    /* console.log('chrome.storage', chrome.storage)
    chrome.storage.sync.set({ msg: 'hello world' }, function () {
      console.log('Value is set to ' + 'hello world')
    })
    chrome.storage.sync.get(['msg'], function (result) {
      console.log('result is ', result)
    }) */
  }, [])

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        {data[0].list.map((row) => (
          <ul className={Styles.row} key={row.title}>
            <li className={Styles.rowItem}>{row.title}</li>
            {row.list.map((item) => (
              <li className={Styles.rowItem} key={item.name}>
                <a target='_blank' href={item.url}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Tabs
