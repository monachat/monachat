import XMLSocket from 'xmlsocket';

import './Monachat/Server.mjs';

export default class Monachat extends XMLSocket {
  constructor(...args) {
    return super(...args);
  }
}
