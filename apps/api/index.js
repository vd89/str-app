import {createServer} from './src/server.js';

const port = process.env.PORT || 8000;
const server = createServer();

server.listen(port, () => {
  console.info(`Api Server is running on ${port}, http://localhost:${port}`);
});
