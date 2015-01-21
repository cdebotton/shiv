import React from 'react';
import shiv from '../..';

let ReactRouter = shiv.get('react.router');

export default function(server){
  return new Promise((resolve, reject) => {
    let Router = createRouter(resolve, reject, server.req.url);

    resolveRoute(Router, server).then(...args => {
      resolve(...args);
    });
  });
};

let createRouter = (resolve, reject, url) => {
  let Routes = shiv.get('client.routes');

  return ReactRouter.create({
    routes: Routes,
    location: url,
    onAbort: (aborted) => {
      let {to, params, query} = aborted;
      let url = ReactRouter.makePath(to, params, query);

      reject(url);
    }
  });
};

let resolveRoute = (Router, server) => {
  return new Promise((resolve, reject) => {
    try {
      Router.run(...args => {
        resolve(...args)
      });
    }
    catch (err) {
      reject(err);
    }
  }).catch(redirect => {
    server.redirect(redirect);
  });
};
