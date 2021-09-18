import React, { useState, useEffect } from 'react'
import Styles from './index.module.scss'

const Tabs = () => {
  useEffect(() => {
    console.log('chrome.storage', chrome.storage)
    chrome.storage.sync.set({ msg: 'hello world' }, function () {
      console.log('Value is set to ' + 'hello world')
    })
    chrome.storage.sync.get(['msg'], function (result) {
      console.log('result is ', result)
    })
  }, [])

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <ul className={Styles.row}>
          <li className={Styles.rowItem}>视频</li>
          <li className={Styles.rowItem}>bilibili</li>
          <li className={Styles.rowItem}>腾讯视频</li>
          <li className={Styles.rowItem}>爱奇艺</li>
          <li className={Styles.rowItem}>芒果视频</li>
          <li className={Styles.rowItem}>优酷</li>
          <li className={Styles.rowItem}>Youtube</li>
          <li className={Styles.rowItem}>斗鱼直播</li>
        </ul>
      </div>
    </div>
  )
}

export default Tabs
