const express = require('express');
const app = express();

// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetTable
apiRouter.get('/table', (_request, response) => {
  response.send(table);
});

// AddToTable
apiRouter.post('/row', (request, response) => {
  table.push(request.body);
  response.send(table);  // Row later
});

// GetTreeName
apiRouter.get('/treename', (_request, response) => {
  response.send(treename);
})

// UpdateTreeName
apiRouter.post('/treename', (request, response) => {
  treename = updateTreeName(request.body, scores);
  response.send(treename);
});

// Return the application's default page if the path is unknown
app.use((_request, response) => {
  response.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let table = []
