# recent
工作区管理工具
### 安装
```bash
npm install -g recent-cli
```

### 添加code命令
在VS Code中使用快捷键 Command/ + shift + P 打开命令行面板
![添加code命令](https://cdn.jsdelivr.net/gh/zhujm/myfiles@master/images/image-20211123190136479.png)

### 使用
recent可以简写为: r：
- `recent` 交互方式打开工作区
- `recent add dirname` 添加工作区
- `recent del dirname` 删除工作区
- `recent ls` 查看已添加的所有工作区
- `recent ls xxx` 根据输入的内容筛选工作区
- `recent xxx` 根据输入内容进行匹配并打开

### 使用示例：
```bash
# 添加当前目录到工作区
r add . 
# 删除工作区
r del /User/aaa
# 查看所有工作区
r ls
# 查看包含字符串`recent-cli`的工作区路径
r ls recent-cli
# 使用VS Code打开包含`recent-cli`的工作区
r recent-cli
```