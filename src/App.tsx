import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <Provider store={store}>
        <div>
            <h1>App</h1>
            <h2>App Name</h2>
            <i className="bi bi-bag-plus"></i>
        </div>
    </Provider>
  )
}

export default App
