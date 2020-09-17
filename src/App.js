import React from 'react';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Detail from './pages/detail/loadable';
import Home from './pages/home';
import Login from './pages/login/loadable';
import write from './pages/write';
import { reducer } from './common/header/store';

function App() {
  return (
    <Provider store={store}>
      <Router>{/*you should Not use Link outSide Router Component*/}
        <Header />
        <Route path="/" exact component={Home}>
        </Route>
        <Route path="/detail/:id" exact component={Detail}>{/*url 参数匹配*/}
        </Route>
        <Route path="/Login" exact component={Login}>
        </Route>
        <Route path="/write" exact component={write}>
        </Route>
        <div style={{width:'100px',height:'100px',outline:'2px slash red',backgroundColor:'green',margin:'10px'}}>
          outline 
        </div>
      </Router>
    </Provider>
  );
}

export default App;
