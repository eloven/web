const fs  = require('fs')
const path = require('path')
const { spawn } = require('child_process')
const project = require('../package.json')

const libs = fs.readdirSync(path.resolve(__dirname, '..', 'projects'))

const MIN_VERSION = 10
const reg = /v\d*./

function checkNodeVersion() {
  const node = spawn('node', ['-v']);
  node.stdout.on('data', data => {
    const v = data.toString().match(reg)[0];
    if (v.substr(1, v.length - 2) > MIN_VERSION) {
      console.log("Node Version is Ok !")
    } else {
      console.error(`Your Node Version is ${data.toString()} , but need >= ${MIN_VERSION}`)
    }
  })
}

checkNodeVersion()

let args = ''
for (let i = 0; i < libs.length; i++) {
  if (i !== libs.length - 1) {
    args += `ng build ${libs[i]} && `
  } else {
    args += `ng build ${libs[i]}`
  }
}
project.scripts.libs = args

// fs.writeFileSync(path.resolve(__dirname, '..', 'package.json'), JSON.stringify(project));
