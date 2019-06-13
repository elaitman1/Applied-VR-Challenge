import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from '../redux/store';
import Application from './component';
import GlobalComponent from '../components/global/GlobalComponent.jsx'
const render = (Component, create) => {
	const dest = document.getElementById('app');
	const store = create(window.STORAGE || {});

	const application = (
        <Provider store={store} key={Math.random()}>
            <GlobalComponent />
        </Provider>
	);

	ReactDOM.render(application, dest);
};

render(Application, createStore);

/* eslint-disable */
if (module.hot) {
	module.hot.accept([
		'./component',
		'../redux/store',
		'../../scss/pages/index',
	], () => {
		const newCreateStore = require('../redux/store');
		const NewComponent = require('./component');
		render(NewComponent, newCreateStore);
	});
}
