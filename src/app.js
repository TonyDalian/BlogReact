import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { configureStore } from './store';

import Layout from './components/layout';

ReactDom.render(
  <Provider store={configureStore()}>
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={Layout} /> 
			</Switch>
		</div>
	</BrowserRouter>
  </Provider>, 
  document.querySelector('.app')
);
