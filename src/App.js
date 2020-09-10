import React from 'react';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './pages/detail';
import Home from './pages/home';

function App() {
  return (
    <Provider store={store}>
      <Router>{/*you should Not use Link outSide Router Component*/}
        <Header />
        <Route path="/" exact component={Home}>
        </Route>
        <Route path="/detail/:id" exact component={Detail}>{/*url 参数匹配*/}
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
