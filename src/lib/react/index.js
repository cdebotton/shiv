'use strict';

import React from 'react';
import invariant from '../../utils/invariant';
import shiv from '../..';
import fetchState from './fetchState';
import getHandler from './getHandler';

class ShivReact {
  constructor() {
    invariant(
      Shiv.get('react.router').hasOwnProperty('run') === true,
      'You must supply an instance of ReactRouter to Shiv.set(\'react.router\')'
    );

    invariant(
      Shiv.get('react.routes') instanceof Shiv.get('react.router').Routes,
      'You must supply valid ReactRouter routes'
    );

    return function *() {
      let [Handler, state] = yield getHandler(this);
      let {routes, params, query} = state;
      let data = yield fetchData(routes, params, query);
      let markup = React.renderToString(
        <Handler
          params={params}
          query={query} />
      );

      this.body = `<!doctype html>${markup}`;

      yield next;
    };
  }
}

module.exports = ShivReact;
