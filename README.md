

# 描述
本软件用于在本地网络部署静态页面，需要安装nodejs使用


# 安装

```
git clone https://gitee.com/anschaser/acpages.git
cd acpages
npm install
```


# 使用

## 启动服务器

1. 命令行启动

   ```
   node src/start.js
   ```

2. 脚本启动  
   双击 `./scripts/*/start.bat`

3. 后台运行  
   双击 `./scripts/*/start-noconsole.vbe`


## 更新页面
  启动服务器时不会更新资源，这样可以使页面保持在一个较旧的稳定版本  
  在觉得合适的时候，你可以选择主动更新

1. 命令行更新
   ```
   node src/update.js
   ```

2. 脚本更新  
   双击 `./scripts/*/update.bat`


## 更改配置

配置文件路径：`./page.config.json`  
可配置的选项：  

1. `DeployPort`:  
   默认80端口，页面将被部署到此端口

2. `PagesProjectRoot`  
   需要部署的文件夹，相对路径的起点是配置文件本身的位置  
   每次主动更新都会缓存一次该文件夹内所有页面的副本  
   服务器部署的就是这些页面副本，原文件不会被修改，你可以在原来的位置继续开发和打包  

假如现在指定了一个具有以下目录结构的文件夹来部署页面：

```
./
|--PageProjectRoot/
   |--app1/
      |--dist/
         |--css/
         |--js/
         |--index.html
   |--app2/
      |--css/
      |--js/
      |--index.html
```

更新页面时，`app1/dist/` 和 `app2/` 文件夹内的所有文件将被缓存下来  
更新完成在浏览器输入 `localhost:80/app1` 和 `localhost:80/app2` 就可以访问到它们  
之后你可以在原来的位置继续开发和打包，新打包的页面将在下一次主动更新时生效