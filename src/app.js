const express = require('express');
const fs = require('fs')
const path = require('path')
const pageconfig = require('../page.config.json')

const pagesProjectsRoot = path.resolve(__dirname, '../', pageconfig.PagesProjectRoot)
const pagesDeployRoot = path.resolve(__dirname, '../pages')

function start() {
  const app = express();
  app.use('/', express.static(pagesDeployRoot))
  app.listen(pageconfig.DeployPort, () => {
    console.log(`服务器已启动: http://localhost:${pageconfig.DeployPort}`);
  })
}

function updatepages() {
  fs.rmSync(pagesDeployRoot, {'recursive': true, 'force': true})
  fs.mkdirSync(pagesDeployRoot)
  fs.readdirSync(pagesProjectsRoot).forEach(pagename => {
    distpath1 = `${pagesProjectsRoot}/${pagename}`
    distpath2 = `${pagesProjectsRoot}/${pagename}/dist`
    pageProjectDistpath = fs.existsSync(distpath2) ? distpath2 : distpath1
    pageDeployPath = `${pagesDeployRoot}/${pagename}`
    fs.cpSync(pageProjectDistpath, pageDeployPath, {'recursive': true})
  })
  console.log('所有页面已更新')
}

module.exports = {start, updatepages}
