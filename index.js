const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetTable
apiRouter.get('/table', async (_request, response) => {
  const table = await DB.getTable();
  response.send(table);
});

// AddToTable
apiRouter.post('/row', async (request, response) => {
  DB.addEntry(request.body);
  const table = await DB.getTable();
  response.send(table);  // Row later
});

// Return the application's default page if the path is unknown
app.use((_request, response) => {
  response.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
