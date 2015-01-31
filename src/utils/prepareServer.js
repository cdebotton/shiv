import Shiv from '..';
import path from 'path';
import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import compress from 'koa-compress';
import favicon from 'koa-favicon';
import json from 'koa-json';
import mount from 'koa-mount';
import passport from 'koa-passport';
import session from 'koa-session';
import serveStatic from 'koa-static';
import KeyGrip from 'keygrip';
import requireDir from 'require-dir';

export default function() {
  let app = koa();
  let keys = [Shiv.get('app.secretKey'), Shiv.get('app.secretToken')];
  let middleware = requireDir('../middleware');
  let routes = Shiv.get('api.routes');

  app.keys = new KeyGrip(keys, 'sha256');
  app.use(middleware.responseTime());
  app.use(middleware.errorPropagation());
  app.use(json({pretty: false}));
  app.use(compress());
  app.use(bodyparser());
  app.use(session(app));
  app.use(serverStatic(
    path.join(__dirname, 'public')
  ));

  Object.keys(routes).forEach(route => {
    let Route = routes[route];
    app.use(mount(route, Route.middleware()));
  });

  app.use(middleware.isomorphic());

  return app;
};
