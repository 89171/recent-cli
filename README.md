# recent
工作区管理工具
- 记录工作区目录
- 直接通过VS Code打开工作区
- 快捷切换Terminal工作目录

![recent-demo](https://myfiles.s3.cn-north-1.jdcloud-oss.com/recent-demo.gif)


### 安装
```bash
npm install -g recent-cli
```

### 添加code命令
在VS Code中使用快捷键 Command/ + shift + P 打开命令行面板，添加code命令

![添加code命令](https://myfiles.s3.cn-north-1.jdcloud-oss.com/image-20211123190136479.png)

> 添加完成后可以在命令行中通过code命令直接打开VS Code

### 使用

可以通过recent(可以简写为r)命令来管理工作区

#### 使用示例：

```bash
# 添加当前目录到工作区
r add . 
# 删除工作区
r del /User/xxxx
# 交互方式选择工作区，自动通过VSCode打开
r
# 通过模糊匹配打开工作区 打开路径中包含express的工作区
r express
# 查看所有已添加工作区
r ls
# 查看包含字符串`recent-cli`的工作区路径
r ls recent-cli
```

recent-cli支持的命令：

- `r` 交互方式打开工作区
- `r add dirname` 添加工作区
- `r del dirname` 删除工作区
- `r ls` 查看已添加的所有工作区
- `r ls xxx` 根据输入的内容筛选工作区
- `r xxx` 根据输入内容进行匹配并打开



### 其他用法

假设你已经添加了一个 `/Users/xxxx/gitlab/learn/cypress-demo` 路径作为工作区

**VS Code打开工作区并切换当前terminal工作目录**

```bash
cd `r cyp`
```
其中`cyp`为模糊匹配的工作区`cypress`，recent会通过VS Code打开工作区并打印工作区目录，cd命令获取打印结果作为参数切换当前terminal工作目录为工作区

**仅切换当前terminal工作目录为匹配工作区**

```bash
cd `r ls cyp`
```