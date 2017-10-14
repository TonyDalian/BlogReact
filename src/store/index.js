import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { translationsObject } from '../translations';
import rootReducer from '../reducers';

import { technologies } from '../data/technologies'; 
import { experiences } from '../data/experiences';
import { categories } from '../data/categories';
import { academics } from '../data/academics';
import { projects } from '../data/projects';
import { resume } from '../data/resume';

import { getProjects, getCategories, getTechnologies, getAcademics, getExperiences, getResume } from '../action';

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
  store.dispatch(getExperiences(experiences));
  store.dispatch(getCategories(categories));
  store.dispatch(getAcademics(academics));
  store.dispatch(getProjects(projects));
  store.dispatch(getResume(resume));

  return store;
}
