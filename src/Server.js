import prepareServer from './utils/prepareServer';

let SERVER_CONTAINER = Symbol('contains server instance');

class Server {
  constructor() {
    this[SERVER_CONTAINER] = prepareServer();
  }
}
