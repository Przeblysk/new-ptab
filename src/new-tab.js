/*
 * @Author: Przeblysk
 * @Date: 2021-09-14 13:55:49
 * @LastEditTime: 2021-09-23 16:33:48
 * @LastEditors: Przeblysk
 * @Description: 
 * @FilePath: /new-ptab/src/new-tab.js
 * 
 */
import * as React from 'react';
import * as ReactDom from 'react-dom';

import App from 'pages/new-tab'

import 'styles/main.scss'

ReactDom.render(
  <App/>,
  document.getElementById('app')
);

