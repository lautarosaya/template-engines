const express = require("express");
const path = require("path");

const mainRoute = require("./routes/main-route");

const app = express();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`El sv anda en el puerto ${port}`);
});

app.use(express.static(path.join(__dirname, "../public")));

app.use(mainRoute);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
