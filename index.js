const express = require("express");
const authRouter = require("./routes/auth");
const Connection = require("./storage/db");
const userRouter = require("./routes/user");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/static", express.static("./uploads"));

app.get("/", function (req, res) {
  res.send("App Started");
});

app.use("/auth", authRouter);
app.use("/profile", userRouter);

// app.listen(port, async () => {
//   try {
//     await Connection;
//     console.log("Connected");
//   } catch (e) {
//     console.log(e);
//   }

//   console.log("Server is live at http://localhost:8080");
// });

app.listen(port, async (err, res) => {
  try {
    await Connection;
    console.log("Connected Successfully");
  } catch (err) {
    console.log(err);
  }

  if (err) {
    return console.log("Something went wrong");
  }
  console.log("Sever is live at http://localhost:8080");
});
