import xml2js from 'xml2js';

import Monachat from '../lib/Monachat.mjs';

const HOST = 'localhost';
const PORT = 9095;

const sleep = (seconds) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1e3));

const client = new Monachat(
  {
    host: HOST,
    port: PORT,
  },
  async () => {
    client.write('MojaChat\0');

    await sleep(0.2);

    client.write('<ENTER room="/COOL8099" attrib="no"/>\0');
  },
);

client.on('data', (data) => {
  const lines = String(data)
    .replace(/\0$/, '')
    .split('\0');

  console.log(lines);

  lines.forEach((line) => {
    xml2js.parseString(line, (error, object) => {
      if (error) {
        return;
      }

      const rootTagName = Object.keys(object)[0];
      const attributes = object[rootTagName].$ || {};

      switch (rootTagName) {
        case 'COM': {
          const { cmt } = attributes;

          switch (cmt) {
            case 'unko': {
              client.write('unko\0');
            }
            // no default
          }
        }
        // no default
      }
    });
  });
});
