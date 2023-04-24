/* eslint-disable jsx-quotes */
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import App from './App';
import { store } from './app/store';
import { fetchPosts } from './features/posts/postsSlice';
import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
