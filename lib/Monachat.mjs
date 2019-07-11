import XMLSocket from 'xmlsocket';

export default class Monachat extends XMLSocket {
  constructor(...args) {
    return super(...args);
  }
}

Monachat.Server = class extends XMLSocket.Server {
  constructor(...args) {
    return super(...args);
  }
};
