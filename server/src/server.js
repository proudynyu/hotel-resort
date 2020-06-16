const app = require('./index');
const { host, port } = require('./config');

app.listen(port, () => {
  console.log(`Listening on ${host}:${port}`);
});