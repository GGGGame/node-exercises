import * as fs from "node:fs";

fs.writeFile(
  "methodCallBack.txt",
  "Method call back file",
  "utf-8",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("new file created correctly");
    }
  }
);
