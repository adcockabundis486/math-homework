const getRandomNodeJsCode = () => {
  const code = `
    const express = require('express');
    const app = express();

    // Set up a simple route
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Start the server
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  `;

  return code;
};
