import express, { response } from "express";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.get("/", async (req, res) => {
  const users = await prisma.users.findMany();

  res.json(users);
});

export default app;
