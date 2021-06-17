const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 4041;
const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.once("open", () => console.log("MongoDB Connected"));

// Routes
app.get("/", (req, res) =>
  res.json("Hey, the api is working. try out /blogs route to see blogs")
);
app.use("/blogs", require("./routes/Blogs"));

app.listen(PORT, () => console.log(`Open on http://localhost:${PORT}`));
