import express from "express";
import usersRouter from "./routes/users";
const app = express();
const port = 3000;

app.use("/api/users", usersRouter);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello express + ts 12313");
// });

// app.get("/zxc", (req: Request, res: Response) => {
//   res.send("123");
// });

app.listen(port, () => {
  console.log(`listenin to port ${port}`);
});
