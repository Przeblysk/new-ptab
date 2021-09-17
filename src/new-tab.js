/*
 * @Author: Przeblysk
 * @Date: 2021-09-14 13:55:49
 * @LastEditTime: 2021-09-17 19:44:43
 * @LastEditors: Przeblysk
 * @Description: 
 * @FilePath: /new-ptab/src/new-tab.js
 * 
 */
import * as React from 'react';
import * as ReactDom from 'react-dom';

import './styles/main.scss'

import App from './pages/new-tab/index.jsx'

ReactDom.render(
  <App/>,
  document.getElementById('app')
);

