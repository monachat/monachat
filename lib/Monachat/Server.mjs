import XMLSocket from 'xmlsocket';

if (typeof Monachat === 'undefined') {
  global.Monachat = {};
}

Monachat.Server = class extends XMLSocket.Server {
  constructor(...args) {
    return super(...args);
  }
};
