# recent
Manage your workspaces

![Demo](https://cdn.jsdelivr.net/gh/zhujm/myfiles@master/images/7f353804-0dd3-47b9-8ca3-ab09a3012253.gif)

### Install
```bash
npm install -g recent-cli
```

### Add code command
Use the shortcut key Command/ + shift + P in VS Code to open the command panel

![Add code command](https://cdn.jsdelivr.net/gh/zhujm/myfiles@master/images/image-20211123190136479.png)

### Useage
recent can be abbreviated as: r
- `recent` Open the workspaces interactively in recent
- `recent add dirname` add workspace
- `recent del dirname` delete workspace
- `recent ls` view all the added workspaces
- `recent ls xxx` filter the workspace
- `recent xxx` match and open the workspace according to the input


### Example：
```bash
# Add current directory
r add . 
# Delete workspace
r del /User/aaa
# View all workspaces
r ls
# View the workspace path containing the string `recent-cli`
r ls recent-cli
# Use VS Code to open the workspace containing `recent-cli`
r recent-cli
```