import { readFile, writeFile } from "fs";

readFile("./wordList.txt", "utf8", function(err, data) {
  if (err) throw err;
  const words = data.split("\r\n");
  const dictionary = [];

  for (let i = 0; i < words.length; i++) {
    dictionary[i] = words[i];
  }

  writeFile("./wordList.json", JSON.stringify(dictionary, null, " "), error => {
    if (error) throw error;
  });
});
