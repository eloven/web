const path = require("path")
const fs = require("fs")

function logEnv() {
  const packages = path.relative(__dirname, "../packages")
  fs.readdir(packages, (err, files) => {
    if (err) {
      console.log("read packages failed", err.message)
    } else {
      for (const file of files) {
        console.log(file)
      }
    }
  })
}
