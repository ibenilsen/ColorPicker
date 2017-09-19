import './styles/index.css';
import './styles/flexboxgrid.min.css';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import App from './containers/App';
import ColorList from './containers/ColorList';
import ColorDetail from './components/ColorDetail';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App>
          <Switch>
            <Route path="/color/:id" component={ColorDetail} />
            <Route path="/" component={ColorList} />
          </Switch>
        </App>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

  registerServiceWorker();
