const express = require("express");
const app = express();
const port = 3000;

const bodyps = require("body-parser");
app.use(bodyps.urlencoded({ extended: false }));
app.use(bodyps.json());

const mhsRouter = require("./routes/transmisi");
app.use("/api/transmisi", mhsRouter);

const jurusanRouter = require("./routes/kendaraan");
app.use("/api/kendaraan", jurusanRouter);

app.listen(port, () => {
  console.log(`aplikasi berjalan di http:://localhost:${port}`);
});
