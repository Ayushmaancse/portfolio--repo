const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const cloneRoutes = require("./routes/cloneRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/clone", cloneRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`DCAAS API running on port ${PORT}`));
