# 前端下载json文件

```
const download = async () => {
    // .json为json文件，可以下载其他类型，如.html
    const filename = `${new Date().toLocaleDateString()}.json`;
    // 创建隐藏的可下载链接
    const eleLink = document.createElement('a');
    eleLink.download = filename;
    eleLink.style.display = 'none';
    // 字符内容转变成blob地址
    const blob = new Blob([JSON.stringify(list)]);
    eleLink.href = await URL.createObjectURL(blob);
    // 触发点击
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  };
```
