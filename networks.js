var fs = require('fs')

var networkFiles = fs.readdirSync('networks')
var networks = []

for (var i = 0, j = networkFiles.length; i < j; i++) {
  var file = networkFiles[i]

  if (file.substr(-5) !== '.json') continue

  var networkData = fs.readFileSync('networks/' + file)
  var network = JSON.parse(networkData)
  networks.push(network)
}

exports.networkList = networks