import express from "express";

import router from "./src/router";

const app = express();
const port = 3000;

app.use(express.json({ limit: "50mb" })).use("/api", router);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
