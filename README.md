# WX Compile key

[![NPM](https://nodei.co/npm/wx-compile-key.png)](https://www.npmjs.com/package/wx-compile-key)

这是一个微信小程序的辅助工具， 作用很简单， 只是一个简单的hack， 改了一下他的源码， 把微信小程序编译的快捷键变成了全局。
快捷键默认设置为**control+alt+shift+f10**。

##目的

其实这一个只是gulp-wx-compile的插件之一， 目的很简单， 让微信小程序变得跟webpack或者gulp一样， 当我们保存自己的代码， 小程序就自动编译，
感觉跟browser sync一样， 提高我们开发效率。

## 思路
以前做过游戏脚本开发，所以尝试通过窗口句柄发送ctrl+b（默认微信小程序编译快捷键）来隐式编译， 但在非激活窗口状态下可以发送单个快捷键但
无法发送组合快捷键， 这样当我们边写代码边保存的时候由于需要激活微信窗口会导致失焦的问题，所以放弃这个最简单也最优的方式。
如果有大大能解决， 欢迎给我留言。

这里选择第二种方式， 通过研读小程序的源码发现编译只是触发一个dispatch rebuild的方法（微信小程序也用到了redux）而且是基于nw.js开发的， 所以由此观察得出一个结论， 
我只需要为他注册一个全局的热键并绑定dispatch rebuild即可。

```shell
npm i wx-compile-key -g
wx-compile-key  ##这句话必须要在管理员模式下执行， 因为微信小程序的文件都是限定了修改权限的
```

## Licensing
MIT license