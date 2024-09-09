const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send(JSON.stringify({
  message: 'Hello World!'
}, null, 2) + '\n'));

app.get('/req2', (req, res) => {  // request lifecycle 1
  console.log(1); process.nextTick(() => { console.log('process -> next tick 1'); }); console.log(2);
  const baz = () => console.log('baz'); const foo = () => console.log('foo'); const zoo = () => console.log('zoo');
  const start = () => {
    console.log(3);
    setImmediate(baz);
    new Promise((resolve, reject) => { setTimeout(() => { console.log(6); resolve('bar'); }, 1000); })
      .then((resolve) => { console.log(resolve); process.nextTick(zoo); });
    process.nextTick(foo); console.log(4);
  };
  start();
});
app.get('/req1', (req, res) => {  // request lifecycle 1
  console.log('start')
  setTimeout(() => console.log('setTimeout 1 with 0'), 0)
  setTimeout(() => console.log('setTimeout 2 with 10'), 10)
  setTimeout(() => console.log('setTimeout 3 with 15'), 15)

  let f1 = () => {
    console.log('setInterval 1 with 0')
    clearInterval(i1)
  }
  let f2 = () => {
    console.log('setInterval 2 with 10')
    clearInterval(i2)
  }
  let f3 = () => {
    console.log('setInterval 3 with 16')
    clearInterval(i3)
  }

  let i1 = setInterval(f1, 0)
  let i2 = setInterval(f2, 10);
  let i3 = setInterval(f3, 16);

  setImmediate(() => console.log('setImmediate'))
  process.nextTick(() => { console.log('nextTick') });
  console.log('end')
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));
