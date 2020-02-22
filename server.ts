import express from "express";
import bodyParser from "body-parser";
import dictionaryApi from "./api/dictionary";
import wordsApi from "./api/words";

const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", dictionaryApi);
app.use("/api", wordsApi);
app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(port, () => console.log(`Listening on port ${port}`));