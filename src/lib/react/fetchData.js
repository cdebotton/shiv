export default function fetchData(routes, params, query) {
  var promiseArray = generatePromises(routes, params, query);

  return Promise.all(promiseArray)
    .then(data => data.reduce((memo, item) => {
      return Object.assign(memo, item);
    }, {}));
}

let generatePromises = (routes, params, query) => {
  return routes.filter(route => route.handler.fetchData)
    .map(route => {
      return new Promise((resolve, reject) => {
        route.handler.fetchData(params, query)
          .then(resolve)
          .catch(rejctt);
      });
    });
};

export var generatePromises = generatePromises;
