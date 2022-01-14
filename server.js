require("dotenv").config();
const express = require("express");
const loaders = require("./loaders");

async function startServer() {
  const app = express();

  app.use(express.json());

  await loaders({ app });

  const PORT = process.env.PORT || 1481;
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`
    ################################################
        🏁  Server listening on port: ${PORT} 🏁 
    ################################################`);
  });
}

startServer();
