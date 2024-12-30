const express = require("express");
const appRoutes = require("./routes/routes.js")
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(cors());

app.use(bodyParser.json());

app.use("/api", appRoutes)


app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
