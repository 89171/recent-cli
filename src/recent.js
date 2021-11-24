#!/usr/bin/env node
var inquirer = require('inquirer')
const spawn = require('cross-spawn')
const { writeFileSync, statSync } = require('fs')
const path = require('path')
const { mkdirp, shortPaths, getOption } = require('../util')

// fileCheck && fileCreate
const configPath = path.resolve(__dirname, '../../config/recent.json')
const saveConfig = (data) => {
    writeFileSync(configPath,JSON.stringify(data,'','\t'))
}
try {
    statSync(configPath)
} catch(e) {
    mkdirp(path.dirname(configPath))
    saveConfig([])
}
const recentData = require(configPath)


// parse Option
const {option:addPath} = getOption('add')
const {option:delPath} = getOption('del')
const {option:filterPath} = getOption('filter')
const {option:openFilterPath} = getOption('open')
const {option:list} = getOption('ls')
const {rest:rest} = getOption()

// 查看工作区列表
if(list === undefined) {
    console.log(recentData)
    return
}else if(list){
    const listData = recentData.filter(item=>item.toLocaleLowerCase().includes(list.toLocaleLowerCase()))
    if(listData.length === 1){
        console.log(listData[0])
    }else{
        console.log(listData)
    }
    return
}

// 添加/删除/筛选工作台区
if(addPath) {
    const addResolvePath = path.resolve(process.cwd(),addPath)
    const index = recentData.indexOf(addResolvePath)
    if(index > -1) {
        // 如果已存在，则置顶
        const exitsPath = recentData.splice(index,1)
        exitsPath && exitsPath[0] && recentData.unshift(exitsPath[0])
    }else{
        recentData.unshift(path.resolve(process.cwd(),addPath))
    }
    console.warn('Added successfully!')
    saveConfig(recentData)
    return
}else if(delPath) {
    const delResolvePath = path.resolve(process.cwd(),delPath)
    const index = recentData.indexOf(delResolvePath)
    if(index > -1) {
        recentData.splice(recentData.indexOf(delResolvePath),1)
        saveConfig(recentData)
        console.log('Deleted successfully!')
    }else {
        console.warn('Not found!')
    }
    return
}else if(filterPath || openFilterPath){
    openPath(filterPath || openFilterPath)
    return
}else if(rest && rest[0]){
    openPath(rest[0])
    return
}

if(!recentData || recentData.length === 0){
    console.log('No data.')
    return
}
// 打开工作区
!addPath && !delPath && !filterPath && !openFilterPath && inquirer
  .prompt([
    {
        type: 'list',
        name: 'dir',
        message: 'Which workspace do you want to open?',
        choices: shortPaths(recentData,2),
        loop: false,
        pageSize: 10
    }
  ])
  .then(answers => {
    openPath(answers.dir)
  })
  .catch(error => {
    console.error(error)
  })

  function openPath(target){
    const dirname = recentData.find(item=>item.toLocaleLowerCase().indexOf(target.toLocaleLowerCase()) > -1)
    if(!dirname) return
    // process.chdir(dirname)
    spawn('code', [dirname])
    recentData.unshift(recentData.splice(recentData.indexOf(dirname),1)[0])
    saveConfig(recentData)
    console.log(dirname)
  }