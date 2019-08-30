<p align="center">
  <a href="https://github.com/i-jump/ts-librarys.git">
    <img src="img/ts.jpg" width="400">
  </a>
</p>
<h4 align="center">ts-libraries <br> <br> <img src="img/npm.png"/></h4>
<p align="center">一个简化ts打包开发的工具库</p>

做这个工具库的目的是为了：

- 针对大多数应用都会用到的功能进行二次封装，减少样板代码，让开发人员更关注于业务本身
- 只用**一种方式解决一个问题**，在开发时候解决问题可以有多种方式，但是我们只需要一种
- ts 多文件开发，打包成生产开发版本单文件

# 特性

| 内置功能模块 | 作用                                                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| array        | 模块对 array 进行了一次封装，目的是为了减少开发人员的工作量，简化代码、提高开发效率。                                            |
| function     | 使用该模块可以让应用使用一个函数传参的方式，来定义需要进行的加载模块，这样做的好处就在于，我们不用向很多位置添加函数、编写方法。 |
| string       | 提供一个 export 来管理 string 所有页面的参数，方便页面在调用的时候，拿到对应页面的参数                                           |
| 待开发       | 使用 ts-libraries 开发前端 node 人员所需封装，用于简化前端和客户端（node）直接的交互，配合 ts-libraries 开发易如反掌 ：）        |

> 关于自定义模块:

| 自定义模块  | 作用                             |
| ----------- | -------------------------------- |
| tsdx.config | 使用 tsdx 自定义打包所需规范     |
| ts.config   | 使用该自定义模块配置 ts 打包流程 |

# 文档

[点击查看 Wiki](https://github.com/i-jump/ts-libraries/wiki)

# 例子

- 运行 demo

```bash
├── ts-libraries 插件demo
├── lib 打包结果
├── src 插件源码
├── test 测试开发代码
├── .sh shell脚本
├── build node脚本
```

可启动项目里的`ts-libraries`示例应用，就可以了解插件的各个模块的演示；
如果需要测试`lib/index.js模块`需要启动项目里的`自己的项目`一个简单的本地 demo；

```bash
可使用包管理工具为yarn 或 npm
# 下载
git clone https://github.com/i-jump/ts-librarys.git
# 下载依赖
yarn install
# 开发src
coding...
# 测试编码
yarn test
# 打包
yarn build
```

# 案例

| 引入                                     | 使用            | 返回 |
| ---------------------------------------- | --------------- | ---- |
| import { isObject } from 'ts-libraries'; | isObject({a:1}) | true |

# 计划

##### 人闲桂花落，

##### 夜静春山空。

##### 月出惊山鸟，

##### 时鸣春涧中。
