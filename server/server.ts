import * as fs from 'fs';
import * as https from 'https';
import { mock as mockResponse } from './mock';

// Load the SSL certificate and private key
const options = {
  key: fs.readFileSync('./ssl/private-key.pem'),
  cert: fs.readFileSync('./ssl/certificate.pem')
};

// Define the server
const server = https.createServer(options, (req, res) => {
    // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // If needed

  res.setHeader('Content-Type', 'application/json');
  setTimeout(()=>{
    res.end(JSON.stringify(mockResponse));
  }, 2000);
});

const port = 3001;

// Start the server
server.listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});

console.log('started');
