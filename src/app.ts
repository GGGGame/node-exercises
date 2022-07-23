import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (req, res) => {
  res.json([{ id: 1, name: "Davide", lastName: "Ricca", age: 24 }]);
});

export default app;
