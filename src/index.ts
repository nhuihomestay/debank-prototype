import app from './server';

// import fs from 'fs'
// import https from 'https'

// // Start the server
const port = 3000;

app.listen(port, () => {
    console.log('Simple project server started on port: ' + port);
});
