//入口文件

import './css/index.css'
import React from 'react'
import ReactDom from 'react-dom'
import App from "./app";
import { hot } from 'react-hot-loader';

console.log(1)

ReactDom.render(
    <App />, document.getElementById('app'))

hot(module)(App)
