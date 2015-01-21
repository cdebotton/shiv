'use strict';

import koa from 'koa';
import DataMap from './DataMap';

class Shiv {
  constructor() {
    Object.assign(Shiv.prototype, DataMap.prototype);
    DataMap.call(this);

    this.app = new koa();

    return this;
  }
}

export default new Shiv();
