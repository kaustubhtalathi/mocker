const jsonConcat = require('json-concat');

jsonConcat({
    src: "mocks/data",
    dest: "mocks/db.json",
}, function(json){
    console.log(json);
});

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('mocks/data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});