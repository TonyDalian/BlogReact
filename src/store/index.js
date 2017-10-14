import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { translationsObject } from '../translations';
import rootReducer from '../reducers';

import { technologies } from '../data/technologies'; 
import { categories } from '../data/categories';
import { projects } from '../data/projects';

import { getProjects, getCategories, getTechnologies } from '../action';

export function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk, reduxImmutableStateInvariant()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    );
  }
  
  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translationsObject));
  store.dispatch(setLocale('en'));

  store.dispatch(getTechnologies(technologies));
  store.dispatch(getCategories(categories));
  store.dispatch(getProjects(projects));

  return store;
}
