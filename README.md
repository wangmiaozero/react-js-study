# React.js - 第1天

## 1. React简介
+ React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram（照片交友） 的网站。做出来以后，发现这套东西很好用，**就在2013年5月开源了**。
+ Angular1 2009 年  谷歌    MVC  不支持 组件化开发
+ 由于 React 的**设计思想极其独特**，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。
+ 清楚两个概念：
  + library（库）：小而巧的库，只提供了特定的API；优点就是 船小好掉头，可以很方便的从一个库切换到另外的库；但是代码几乎不会改变；
  + Framework（框架）：大而全的是框架；框架提供了一整套的解决方案；所以，如果在项目中间，想切换到另外的框架，是比较困难的；




## 2. 前端三大主流框架

> 三大框架一大抄

+ Angular.js：出来**较早**的前端框架，学习曲线比较陡，NG1学起来比较麻烦，NG2 ~ NG5开始，进行了一系列的改革，也提供了组件化开发的概念；从NG2开始，也支持使用TS（TypeScript）进行编程；
+ Vue.js：**最火**（关注的人比较多）的一门前端框架，它是中国人开发的，对我我们来说，文档要友好一些；
+ React.js：**最流行**（用的人比较多）的一门框架，因为它的设计很优秀；




## 3. React与vue的对比
### 组件化方面
1. **什么是模块化：**是从**代码**的角度来进行分析的；把一些可复用的代码，抽离为单个的模块；便于项目的维护和开发；
2. **什么是组件化：** 是从 **UI 界面**的角度 来进行分析的；把一些可服用的UI元素，抽离为单独的组件；便于项目的维护和开发；
3. **组件化的好处：**随着项目规模的增大，手里的组件越来越多；很方便就能把现有的组件，拼接为一个完整的页面；
4. **Vue是如何实现组件化的：** 通过 `.vue` 文件，来创建对应的组件；
   + template  结构
   + script        行为
   + style           样式


5. **React如何实现组件化**：大家注意，React中有组件化的概念，但是，并没有像vue这样的组件模板文件；React中，一切都是以JS来表现的；因此要学习React，JS要合格；ES6 和 ES7 （async  和 await） 要会用；
### 开发团队方面
+ React是由FaceBook前端官方团队进行维护和更新的；因此，React的维护开发团队，技术实力比较雄厚；
+ Vue：第一版，主要是有作者 尤雨溪 专门进行维护的，当 Vue更新到 2.x 版本后，也有了一个以 尤雨溪 为主导的开源小团队，进行相关的开发和维护；

### 社区方面
+ 在社区方面，React由于诞生的较早，所以社区比较强大，一些常见的问题、坑、最优解决方案，文档、博客在社区中都是可以很方便就能找到的；
+ Vue是近两年才火起来的，所以，它的社区相对于React来说，要小一些，可能有的一些坑，没人踩过；

### 移动APP开发体验方面
+ Vue，结合 Weex 这门技术，提供了 迁移到 移动端App开发的体验（Weex，目前只是一个 小的玩具， 并没有很成功的 大案例；）
+ React，结合 ReactNative，也提供了无缝迁移到 移动App的开发体验（RN用的最多，也是最火最流行的）；





## 4. 为什么要学习React
1. 和Angular1相比，React设计很优秀，一切基于JS并且实现了组件化开发的思想；
2. 开发团队实力强悍，不必担心断更的情况；
3. 社区强大，很多问题都能找到对应的解决方案；
4. 提供了无缝转到 ReactNative 上的开发体验，让我们技术能力得到了拓展；增强了我们的核心竞争力；
5. 很多企业中，前端项目的技术选型采用的是React.js；





## 5. React中几个核心的概念
### 虚拟DOM（Virtual Document Object Model）
 + **DOM的本质是什么**：浏览器中的概念，用JS对象来表示 页面上的元素，并提供了操作 DOM 对象的API；
 + **什么是React中的虚拟DOM**：是框架中的概念，是程序员 用JS对象来模拟 页面上的 DOM 和 DOM嵌套；
 + **为什么要实现虚拟DOM（虚拟DOM的目的）：**为了实现页面中， DOM 元素的高效更新
 + **DOM和虚拟DOM的区别**：
    + **DOM：**浏览器中，提供的概念；用JS对象，表示页面上的元素，并提供了操作元素的API；

    + **虚拟DOM：**是框架中的概念；而是开发框架的程序员，手动用JS对象来模拟DOM元素和嵌套关系；

      + 本质： 用JS对象，来模拟DOM元素和嵌套关系；
      + 目的：就是为了实现页面元素的高效更新；

      ![虚拟DOM - 表格排序案例](images/虚拟DOM引入图片.png)

### Diff算法
 - **tree diff:**新旧两棵DOM树，逐层对比的过程，就是 Tree Diff； 当整颗DOM逐层对比完毕，则所有需要被按需更新的元素，必然能够找到；

 - **component diff：**在进行Tree Diff的时候，每一层中，组件级别的对比，叫做 Component Diff；

    - 如果对比前后，组件的类型相同，则**暂时**认为此组件不需要被更新；
    - 如果对比前后，组件类型不同，则需要移除旧组件，创建新组件，并追加到页面上；

 - **element diff:**在进行组件对比的时候，如果两个组件类型相同，则需要进行 元素级别的对比，这叫做 Element Diff；

   ![Diff算法图](images/Diff.png)

## 6. 创建基本的webpack4.x项目

1. 运行`npm init -y` 快速初始化项目
2. 在项目根目录创建`src`源代码目录和`dist`产品目录
3. 在 src 目录下创建 `index.html`
4. 使用 cnpm 安装 webpack ，运行`cnpm i webpack webpack-cli -D`
   + 如何安装 `cnpm`: 全局运行 `npm i cnpm -g`
5. 注意：webpack 4.x 提供了 约定大于配置的概念；目的是为了尽量减少 配置文件的体积；
   + 默认约定了：
   + 打包的入口是`src` -> `index.js`
   + 打包的输出文件是`dist` -> `main.js`
   + 4.x 中 新增了 `mode` 选项(为必选项)，可选的值为：`development` 和 `production`;



## 7. 在项目中使用 react

1. 运行 `cnpm i react react-dom -S` 安装包

   + react： 专门用于创建组件和虚拟DOM的，同时组件的生命周期都在这个包中
   + react-dom： 专门进行DOM操作的，最主要的应用场景，就是`ReactDOM.render()`

2. 在`index.html`页面中，创建容器：

   ```html
   <!-- 容器，将来，使用 React 创建的虚拟DOM元素，都会被渲染到这个指定的容器中 -->
   <div id="app"></div>
   ```

3. 导入 包：

   ```js
   import React from 'react'
   import ReactDOM from 'react-dom'
   ```

4. 创建虚拟DOM元素：

   ```jsx
   // 这是 创建虚拟DOM元素的 API    <h1 title="啊，五环" id="myh1">你比四环多一环</h1>
   //  第一个参数： 字符串类型的参数，表示要创建的标签的名称
   //  第二个参数：对象类型的参数， 表示 创建的元素的属性节点
   //  第三个参数： 子节点
   const myh1 = React.createElement('h1', { title: '啊，五环', id: 'myh1' }, '你比四环多一环')
   ```


5. 渲染：

   ```js
   // 3. 渲染虚拟DOM元素
   // 参数1： 表示要渲染的虚拟DOM对象
   // 参数2： 指定容器,注意：这里不能直接放 容器元素的Id字符串，需要放一个容器的DOM对象
   ReactDOM.render(myh1, document.getElementById('app'))
   ```

   ​

## 8. JSX语法

> 什么是JSX语法：就是符合 xml 规范的 JS 语法；（语法格式相对来说，要比HTML严谨很多）

1. **如何启用 jsx 语法？**
   + 安装 `babel` 插件

     - 运行`cnpm i @babel-core babel-loader @babel-plugin-transform-runtime -D`
     - 运行`cnpm i @babel-preset-env  -D`

   + 安装能够识别转换jsx语法的包 `babel-preset-react` 

     + 运行`cnpm i @babel-preset-react -D`

   + 添加 `.babelrc` 配置文件

     ```json
     {
    "presets": ["@babel/preset-env", "@babel/preset-react", "mobx"],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-runtime"
    ]
}
     ```

   + 添加babel-loader配置项：

     ```js
     module: { //要打包的第三方模块
         rules: [
           { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
         ]
     }
     ```

     ​

2. **jsx 语法的本质：**并不是直接把 jsx 渲染到页面上，而是 内部先转换成了 createElement 形式，再渲染的；

3. **在 jsx 中混合写入 js 表达式**：在 jsx 语法中，要把 JS代码写到 `{ }` 中

   + 渲染数字
   + 渲染字符串
   + 渲染布尔值
   + 为属性绑定值
   + 渲染jsx元素
   + 渲染jsx元素数组
   + 将普通字符串数组，转为jsx数组并渲染到页面上【两种方案】

4. **在 jsx 中 写注释**：推荐使用`{ /* 这是注释 */ }`

5. **为 jsx 中的元素添加class类名**：需要使用`className` 来替代 `class`；`htmlFor`替换label的`for`属性

6. 在JSX创建DOM的时候，所有的节点，必须有唯一的根元素进行包裹；

7. 在 jsx 语法中，标签必须 成对出现，如果是单标签，则必须自闭和！

> 当 编译引擎，在编译JSX代码的时候，如果遇到了`<`那么就把它当作 HTML代码去编译，如果遇到了 `{}` 就把 花括号内部的代码当作 普通JS代码去编译；




## 9. React中创建组件

### 第1种 - 创建组件的方式

> **使用构造函数来创建组件**，如果要接收外界传递的数据，需要在 构造函数的参数列表中使用`props`来接收；
>
> 必须要向外return一个合法的JSX创建的虚拟DOM；

+ 创建组件：

  ```jsx
  function Hello () { 
  	// return null 
  	return <div>Hello 组件</div>
  }
  ```

+ 为组件传递数据：

  ```jsx
  // 使用组件并 为组件传递 props 数据
  <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>

  // 在构造函数中，使用 props 形参，接收外界 传递过来的数据
  function Hello(props) {
    // props.name = 'zs'
    console.log(props)
    // 结论：不论是 Vue 还是 React，组件中的 props 永远都是只读的；不能被重新赋值；

    return <div>这是 Hello 组件 --- {props.name} --- {props.age} --- {props.gender}</div>
  }
  ```

  ​

1. 父组件向子组件传递数据

2. 使用{...obj}属性扩散传递数据

3. 将组件封装到单独的文件中

4. 注意：组件的名称首字母必须是大写

5. 在导入组件的时候，如何省略组件的`.jsx`后缀名：

   ```js
   // 打开 webpack.config.js ，并在导出的配置对象中，新增 如下节点：
   resolve: {
       extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
       alias: {
           '@': path.join(__dirname, './src')
       }
     }
   ```

6. 在导入组件的时候，配置和使用`@`路径符号

### 第2种 - 创建组件的方式

> 使用 class 关键字来创建组件
>
> ES6 中 class 关键字，是实现面向对象编程的新形式；

#### 了解ES6中 class 关键字的使用

1. class 中 `constructor` 的基本使用
2. 实例属性和实例方法
3. 静态属性和静态方法
4. 使用 `extends` 关键字实现继承

#### 基于class关键字创建组件

1. 最基本的组件结构：

   ```jsx
   class 组件名称 extends React.Component {
       render(){
           return <div>这是 class 创建的组件</div>
       }
   }
   ```




## 10. 两种创建组件方式的对比

1. 用**构造函数**创建出来的组件：叫做“无状态组件”
2. 用**class关键字**创建出来的组件：叫做“有状态组件”

> 有状态组件和无状态组件之间的**本质区别**就是：有无state属性！



## 11. 一个小案例，巩固有状态组件和无状态组件的使用

### 通过for循环生成多个组件
1. 数据：
```js
CommentList: [
    { id: 1, user: '张三', content: '哈哈，沙发' },
    { id: 2, user: '李四', content: '哈哈，板凳' },
    { id: 3, user: '王五', content: '哈哈，凉席' },
    { id: 4, user: '赵六', content: '哈哈，砖头' },
    { id: 5, user: '田七', content: '哈哈，楼下山炮' }
]
```

### 设置样式

1. 使用普通的 `style` 样式
2. 启用 css-modules
2. 使用`localIdentName`设置生成的类名称，可选的参数有：
   + [path]  表示样式表所在路径
   + [name]  表示 样式表文件名
   + [local]  表示样式的定义名称
   + [hash:length]  表示32位的hash值
4. 使用 `:local()` 和 `:global()`



## 安装 React Developer Tools 调试工具

[React Developer Tools - Chrome 扩展下载安装地址](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=zh-CN)



## 总结
理解React中虚拟DOM的概念
理解React中三种Diff算法的概念
使用JS中createElement的方式创建虚拟DOM
使用ReactDOM.render方法
使用JSX语法并理解其本质
掌握创建组件的两种方式
理解有状态组件和无状态组件的本质区别
理解props和state的区别

## 相关文章

+ [2018 年，React 将独占前端框架鳌头？](https://mp.weixin.qq.com/s/gV-w_rRfdBVAqsOpBGZaVw)
+ [前端框架三巨头年度走势对比：Vue 增长率最高](https://mp.weixin.qq.com/s/0wXWqKIigaKzMSfy4vJMVw)


+ [React数据流和组件间的沟通总结](http://www.cnblogs.com/tim100/p/6050514.html)
+ [单向数据流和双向绑定各有什么优缺点？](https://segmentfault.com/q/1010000005876655/a-1020000005876751)
+ [怎么更好的理解虚拟DOM?](https://www.zhihu.com/question/29504639?sort=created)
+ [React中文文档 - 版本较低](http://www.css88.com/react/index.html)
+ [React 源码剖析系列 － 不可思议的 react diff](http://blog.csdn.net/yczz/article/details/49886061)
+ [深入浅出React（四）：虚拟DOM Diff算法解析](http://www.infoq.com/cn/articles/react-dom-diff?from=timeline&isappinstalled=0)
+ [一看就懂的ReactJs入门教程（精华版）](http://www.cocoachina.com/webapp/20150721/12692.html)
+ [CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
+ [将MarkDown转换为HTML页面](http://blog.csdn.net/itzhongzi/article/details/66045880)
+ [win7命令行 端口占用 查询进程号 杀进程](https://jingyan.baidu.com/article/0320e2c1c9cf0e1b87507b26.html)
# React.js - 第2天



## 0. 安装 React Developer Tools 调试工具

[React Developer Tools - Chrome 扩展下载安装地址](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=zh-CN)



## 主要内容

1. 学习 创建组件的第二种方式
2. 美化React组件的样式
3. 小Demo穿起来之前学习的知识点
4. React中绑定事件
5. React组件的生命周期



## 1. React中创建组件

### 第1种 - 创建组件的方式

> **使用构造函数来创建组件**，如果要接收外界传递的数据，需要在 构造函数的参数列表中使用`props`来接收；
>
> 必须要向外return一个合法的JSX创建的虚拟DOM；

- 创建组件：

  ```jsx
  function Hello () { 
  	// return null 
  	return <div>Hello 组件</div>
  }
  ```

- 为组件传递数据：

  ```jsx
  // 使用组件并 为组件传递 props 数据
  <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>

  // 在构造函数中，使用 props 形参，接收外界 传递过来的数据
  function Hello(props) {
    // props.name = 'zs'
    console.log(props)
    // 结论：不论是 Vue 还是 React，组件中的 props 永远都是只读的；不能被重新赋值；

    return <div>这是 Hello 组件 --- {props.name} --- {props.age} --- {props.gender}</div>
  }
  ```

  ​

1. 父组件向子组件传递数据

2. 使用{...obj}属性扩散传递数据

3. 将组件封装到单独的文件中

4. 注意：组件的名称首字母必须是大写

5. 在导入组件的时候，如何省略组件的`.jsx`后缀名：

   ```js
   // 打开 webpack.config.js ，并在导出的配置对象中，新增 如下节点：
   resolve: {
       extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
       alias: {
           '@': path.join(__dirname, './src')
       }
     }
   ```

6. 在导入组件的时候，配置和使用`@`路径符号

### 第2种 - 创建组件的方式

> 使用 class 关键字来创建组件
>
> ES6 中 class 关键字，是实现面向对象编程的新形式；

#### 了解ES6中 class 关键字的使用

1. class 中 `constructor` 的基本使用
2. 实例属性和实例方法
3. 静态属性和静态方法
4. 使用 `extends` 关键字实现继承

#### 基于class关键字创建组件

1. 最基本的组件结构：

   ```jsx
   // 如果要使用 class 定义组件，必须 让自己的组件，继承自 React.Component
   class 组件名称 extends React.Component {
       // 在 组件内部，必须有 render 函数,作用：渲染当前组件对应的 虚拟DOM结构
       render(){
           // render 函数中，必须 返回合法的 JSX 虚拟DOM结构
           return <div>这是 class 创建的组件</div>
       }
   }
   ```


## 2. 两种创建组件方式的对比

> 注意：使用 class 关键字创建的组件，有自己的私有数据（this.state） 和 生命周期函数；
>
> 注意：使用 function 创建的组件，只有props，没有自己的私有数据和 生命周期函数；

1. 用**构造函数**创建出来的组件：叫做“无状态组件”【无状态组件今后用的不多】
2. 用**class关键字**创建出来的组件：叫做“有状态组件”【今后用的最多】
3. 什么情况下使用有状态组件？什么情况下使用无状态组件？
   + 如果一个组件需要有自己的私有数据，则推荐使用：class创建的有状态组件；
   + 如果一个组件不需要有私有的数据，则推荐使用：无状态组件；
   + React官方说：无状态组件，由于没有自己的state和生命周期函数，所以运行效率会比 有状态组件稍微高一些；

> 有状态组件和无状态组件之间的**本质区别**就是：有无state属性、和 有无生命周期函数；

4. 组件中的 `props` 和 `state/data` 之间的区别
   + props 中的数据都是外界传递过来的；
   + state/data 中的数据，都是组件私有的；（通过 Ajax 获取回来的数据，一般都是私有数据）；
   + props  中的数据都是只读的；不能重新赋值；
   + state/data 中的数据，都是可读可写的；



## 3. 渲染评论列表

![效果](./images/cmtlist.png)

### 通过for循环生成多个组件

1. 数据：

```js
CommentList: [
    { id: 1, user: '张三', content: '哈哈，沙发' },
    { id: 2, user: '李四', content: '哈哈，板凳' },
    { id: 3, user: '王五', content: '哈哈，凉席' },
    { id: 4, user: '赵六', content: '哈哈，砖头' },
    { id: 5, user: '田七', content: '哈哈，楼下山炮' }
]
```



## 4. 设置样式

1. 使用普通的 `style` 样式

   ```jsx
   <h1 style={ {color: 'red', fontWeight: 200} }></h1>
   ```

2. 启用 css-modules

   1. 修改 `webpack.config.js`这个配置文件，为 `css-loader` 添加参数：

      ```js
      { test: /\.css$/, use: ['style-loader', 'css-loader?modules'] } // 为 .css 后缀名的样式表  启用 CSS 模块化
      ```

   2. 在需要的组件中，`import`导入样式表，并接收模块化的 CSS 样式对象：

      ```js
      import cssObj from '../css/CmtList.css' 
      ```

   3. 在需要的HTML标签上，使用`className`指定模块化的样式：

      ```jsx
      <h1 className={cssObj.title}>评论列表组件</h1>
      ```

3. 使用`localIdentName`自定义生成的类名格式，可选的参数有：

   - [path]  表示样式表 `相对于项目根目录` 所在路径
   - [name]  表示 样式表文件名称
   - [local]  表示样式的类名定义名称
   - [hash:length]  表示32位的hash值
   - 例子：`{ test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'] }`

4. 使用 `:local()` 和 `:global()`

   - `:local()`包裹的类名，是被模块化的类名，只能通过`className={cssObj.类名}`来使用

     同时，`:local`默认可以不写，这样，默认在样式表中定义的类名，都是被模块化的类名；

   - `:global()`包裹的类名，是全局生效的，不会被 `css-modules` 控制，定义的类名是什么，就是使用定义的类名`className="类名"`

5. 注意：只有`.title`这样的类样式选择器，才会被模块化控制，类似于`body`这样的标签选择器，不会被模块化控制；


### 在项目中启用模块化并同时使用bootstrap

1. 把 自己的样式表，定义为 `.scss`  文件

2. 第三方的 样式表，还是 以 `.css` 结尾

3. 我们只需要为自己的 `.scss` 文件，启用模块化即可；

4. 运行`cnpm i sass-loader node-sass -D` 安装能够解析`scss`文件的loader

5. 添加loader规则：

   ```json
   { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'sass-loader'] } // 打包处理 scss 文件的 loader
   ```

   ​

## 5. React 中绑定事件的注意点

1. 事件的名称都是React的提供的，因此名称的首字母必须大写`onClick`、`onMouseOver`

2. 为事件提供的处理函数，必须是如下格式

   ```
   onClick= { function }
   ```

3. 用的最多的事件绑定形式为：

   ```jsx
   <button onClick={ () => this.show('传参') }>按钮</button>

   // 事件的处理函数，需要定义为 一个箭头函数，然后赋值给 函数名称
   show = (arg1) => {
       console.log('show方法' + arg1)
   }
   ```

4. 在React中，如果想要修改 state 中的数据，推荐使用 `this.setState({ })`





## 6. 绑定文本框与state中的值（单向数据流）

1. 在 Vue 中，默认提供了`v-model`指令，可以很方便的实现 `数据的双向绑定`；

2. 但是，在 React 中，默认只是`单向数据流`，也就是 只能把 state 上的数据绑定到 页面，无法把 页面中数据的变化，自动同步回 state ； 如果需要把 页面上数据的变化，保存到 state，则需要程序员手动监听`onChange`事件，拿到最新的数据，手动调用`this.setState({  })` 更改回去；

3. 案例：

   ```jsx
   <input type="text" style={{ width: '100%' }} value={this.state.msg} onChange={() => this.textChanged()} ref="mytxt" />

    // 响应 文本框 内容改变的处理函数
     textChanged = () => {
       // console.log(this);
       // console.log(this.refs.mytxt.value);
       this.setState({
         msg: this.refs.mytxt.value
       })
     }
   ```

   ​

## 7. 使用ref获取DOM元素引用

和 Vue 中差不多，vue 为页面上的元素提供了 `ref` 的属性，如果想要获取 元素引用，则需要使用`this.$refs.引用名称`

在 React 中，也有 `ref`, 如果要获取元素的引用`this.refs.引用名称`



## 8. 组件的生命周期

- 生命周期的概念：每个组件的实例，从 创建、到运行、直到销毁，在这个过程中，会出发一些列 事件，这些事件就叫做组件的生命周期函数；

- React组件生命周期分为三部分：

  - **组件创建阶段**：特点：一辈子只执行一次

  > componentWillMount: 
  > render：
  > componentDidMount: 

  - **组件运行阶段**：按需，根据 props 属性 或 state 状态的改变，有选择性的 执行 0 到多次

  > componentWillReceiveProps:
  > shouldComponentUpdate:
  > componentWillUpdate: 
  > render: 
  > componentDidUpdate: 

  - **组件销毁阶段**：一辈子只执行一次

  > componentWillUnmount: 

[vue中的生命周期图](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)
[React Native 中组件的生命周期](http://www.race604.com/react-native-component-lifecycle/)

![React中组件的生命周期](./images/LifeCycle.png)

### defaultProps

> 在组件创建之前，会先初始化默认的props属性，这是全局调用一次，严格地来说，这不是组件的生命周期的一部分。在组件被创建并加载候，首先调用 constructor 构造器中的 this.state = {}，来初始化组件的状态。

React生命周期的回调函数总结成表格如下：
![React生命周期表格](./images/LifeCycleTable.png)

组件生命周期的执行顺序：

1. **Mounting：**
   - constructor()
   - componentWillMount()
   - render()
   - componentDidMount()
2. **Updating：**
   - componentWillReceiveProps(nextProps)
   - shouldComponentUpdate(nextProps, nextState)
   - componentWillUpdate(nextProps, nextState)
   - render()
   - componentDidUpdate(prevProps, prevState)
3. **Unmounting：**
   - componentWillUnmount()



## 9. 通过Counter计数器的小案例 - 了解生命周期函数

1. 给 `props` 属性提供默认值 和 进行类型校验，需要先运行`cnpm i prop-types --save`

2. 给组件的 `props` 提供默认值

   ```js
     // 为组件提供 默认的 props 属性值
     static defaultProps = {
       initcount: 0 // 默认值为0    如果用户没有传递 ，则 默认就是0； 如果用户传递了，则 以用户传递的为准
     }
   ```

3. 给组件的 `props` 进行类型校验

   ```js
     // 3. 进行 props 属性的类型校验,   static propTypes = {}  是固定写法
     static propTypes = {
       initcount: PropTypes.number.isRequired // 规定 外界在传递 initcount 的时候，必须是 number 值类型，否则 ，会在终端报警告
       // isRequired 表示 这个 props 属性值 是必须要传递的
     }
   ```

   ​



## 10. 使用React中的事件，绑定count自增



## 11. 发表评论案例



## 相关文章

[类型校验](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
[Animation Add-Ons](https://reactjs.org/docs/animation.html#high-level-api-reactcsstransitiongroup)
# React.js - day3



## 1. 在 render 函数中不能使用 setState

> 因为：setState 会触发 render 函数的执行，如果在 render 函数中，又调用了 setState ，则会进入死循环！




## 2. react结合axios发起ajax请求

1. 用于测试的API地址：

   ```
   get 请求地址： http://39.106.32.91:3000/api/getlunbo
   post请求地址： http://39.106.32.91:3000/api/post
   ```

2. 全局配置`axios`从而让每个组件都能直接调用`axios`发起Ajax请求

   ```js
   import React from 'react'
   import axios from 'axios'

   // class 关键字 底层 也是由 普通 function 构造函数来实现的，因此 class 只是个语法糖
   React.Component.prototype.$http = axios

   // 在每个 用 class 关键字 创建的 组件，都可以直接调用`this.$http`来发起Ajax请求
   ```

3. 全局配置请求的`baseURL `地址

   ```js
   // 全局配置请求的URL根路径
   axios.defaults.baseURL = 'http://39.106.32.91:3000';
   ```

   ​



## 3. 品牌列表案例

### 获取品牌列表数据



### 渲染品牌列表数据



### 自定义全局时间过滤器

1. 定义全局过滤器，需要在 `main.js` 中把过滤器函数挂载给 `React.Component.prototype`

   ```js
   // 模拟全局过滤器
   import moment from 'moment'
   React.Component.prototype.dateFormat = function (dt) {
     return moment(dt).format('YYYY-MM-DD HH:mm:ss')
   }
   ```

2. 定义私有过滤器，直接在每个组件中，定一个过滤器函数就好了：

   ```js
   // 模拟的是私有过滤器
   dateFormat = (dt) => {
     // 做一系列格式化操作
     return dt + '~~~~~~' // moment
   }
   ```

   ​

### 抽离全局配置文件`globalConfig.js`



### 实现根据Id删除品牌数据功能



### 实现添加品牌数据功能



## 4. 路由

> 什么是路由：路由就是对应关系；
>
> 后端路由：URL地址到后端处理函数之间的对应关系；
>
> 前端路由：hash地址到组件之间的对应关系；  监听`window.onhashchange`事件，并拿到最新的hash值，然后对应展示不同的组件即可；

### 配置路由

1. 运行`cnpm i react-router-dom -S`安装依赖项

2. 创建一个`App.jsx`根组件，并在根组件中，按需导入路由需要的三个组件：

   ```js
   import { HashRouter, Route, Link } from 'react-router-dom'
   ```

3. 在`App.jsx`中，render 函数中，最外层使用`HashRouter`进行包裹：

   ```jsx
   render(){
       return <HashRouter>
       	<div>
           	<h1>大标题</h1>
           </div>
       </HashRouter>
   }
   ```

4. 在 需要的地方，使用`Link`组件创建路由链接，其中，通过`to`属性指定路由地址：

   ```jsx
   <Link to="/home">首页</Link>
   ```

5. 使用`Route`组件创建路由规则，同时注意：Route组件有两重身份：1. 路由规则（path   component）；2. 占位符（用来显示匹配到的组件）

   ```js
   // 导入 Home 组件
   import Home from './components/Home.jsx'

   <Route path="/home" component={Home}></Route>
   ```

   ​

### 路由嵌套



### 路由传参



## 5. 使用AntDesign组件库



## 相关文章

+ [react-router官方文档](https://reacttraining.com/react-router/web/guides/quick-start)
# React.js - day4 - 豆瓣电影



## 1. 路由

> 什么是路由：路由就是对应关系；
>
> 后端路由：URL地址到后端处理函数之间的对应关系；
>
> 前端路由：hash地址到组件之间的对应关系；  监听`window.onhashchange`事件，并拿到最新的hash值，然后对应展示不同的组件即可；

### 配置路由

> Vue中的路由怎么使用；
>
> 1. cnpm i `vue-router` -S
> 2. 创建路由的实例对象   const router = new VueRouter({ routes: [] })    【创建路由规则】
> 3. 将 new 出来的 路由实例对象，挂载到 VM 的 router 属性上；
> 4. 在 对应的组件中，使用`<router-link to="路由地址"></router-link>`创建路由连接；
> 5. 在页面上放一个 `<router-view></router-view>` 【路由组件的容器】

总结：如果在框架中，要使用路由，一定要有 【路由规则、路由链接、呈现路由组件的容器】

1. 运行`cnpm i react-router-dom -S`安装依赖项

2. 创建一个`App.jsx`根组件，并在根组件中，按需导入路由需要的三个组件：

   ```js
   // Link 是路由链接
   // Route是路由的规则，同时，也是路由的容器
   // HashRouter 表示路由的包裹容器；在一个项目中，只需要使用唯一的一次！！！
   import { HashRouter, Route, Link } from 'react-router-dom'
   ```

3. 在`App.jsx`中，render 函数中，最外层使用`HashRouter`进行包裹：

   ```jsx
   render(){
       return <HashRouter>
       	<div>
           	<h1>大标题</h1>
           </div>
       </HashRouter>
   }
   ```

4. 在 需要的地方，使用`Link`组件创建路由链接，其中，通过`to`属性指定路由地址：

   ```jsx
   <Link to="/home">首页</Link>
   ```

5. 使用`Route`组件创建路由规则，同时注意：Route组件有两重身份：1. 路由规则（path   component）；2. 占位符（用来显示匹配到的组件）

   ```js
   // 导入 Home 组件
   import Home from './components/Home.jsx'

   <Route path="/home" component={Home}></Route>
   ```

   ​

### 路由重定向

1. 需要按需导入`Redirect`组件：

   ```js
   import { HashRouter, Route, Link, Redirect } from 'react-router-dom'
   ```

2. 新建一个路由规则

   ```jsx
   <Route exact path="/" render={() => <Redirect to="/home" />}></Route>
   // 其中  exact 属性表示 精确匹配
   // path 表示 重定向之前的 路由规则
   // render 是一个函数，必须 为 render 属性绑定一个 function，因此最佳实践是提供一个 箭头函数
   //        在 提供的 箭头函数中，需要return 一个 <Redirect> 组件，其中， to 属性为 重定向的路由
   ```

   ​

### 路由嵌套

1. react中如何实现路由嵌套：直接在需要的组件页面中，创建属于当前页面的 `Link`和`Route`，那么，这些创建的 `Route`和`Link`都属于子路由；

2. 导入需要的路由组件:

   ```js
   import { Link, Route, Redirect } from 'react-router-dom'
   ```

3. 导入需要的子路由组件：

   ```js
   // 导入 子路由组件
   import Tab1 from './Tabs/Tab1'
   import Tab2 from './Tabs/Tab2'
   ```

4. 在指定页面中，创建独属于当前页面的子路由链接：

   ```jsx
   <Link to="/about/tab1">Tab1</Link>&nbsp;&nbsp;
   <Link to="/about/tab2">Tab2</Link>
   ```

5. 在指定页面中，创建独属于当前页面的子路由规则：

   ```jsx
   {/* 应该对应放置两个 Route 占位符，分别用来显示 匹配到的 路由组件 */}
   {/* 重定向的路由规则 */}
   <Route exact path="/about" render={() => <Redirect to="/about/tab1" />}></Route>
   <Route path="/about/tab1" component={Tab1}></Route>
   <Route path="/about/tab2" component={Tab2}></Route>
   ```

   ​

### 路由传参

1. 需要把路由规则中，对应参数的片段区域，使用`:`指定为参数：

   ```jsx
   <Route exact path="/movie/:type/:id" component={Movie}></Route>
   ```

2. 获取 路由规则中匹配到的参数：

   ```js
   this.props.match.params
   ```



### 编程式导航

通过 `this.props.history`对象提供的方法， 可以实现编程式导航：

1. `this.props.history.go(n)` 前进或后退N个历史记录
2. `this.props.history.goBack()`后退1个历史记录
3. `this.props.history.goForward()`前进1个历史记录
4. `this.props.history.push('url地址')`跳转到哪个路由超链接中去





## 2. 使用[AntDesign](https://ant.design/index-cn)组件库

### 完整导入和使用Ant Design的步骤

1. 安装包`cnpm i antd -S`

2. 导入完整的样式表：

   ```js
   // 导入 Antd 的 样式表
   import 'antd/dist/antd.css';
   ```

3. 按需导入需要的组件：

   ```js
   // 按需导入 DatePicker 组件
   import { DatePicker } from 'antd';
   ```

4. 把导入的组件，以标签形式引用到页面上：

   ```jsx
   <DatePicker />
   ```

5. 注意：由于 antd 有自己的css样式表，所以，大家需要包装提前在项目中，配置好了打包`.css`样式表的相关loader;



### 按需导入和使用 Ant Design 的步骤

1. 运行`cnpm i babel-plugin-import -D`安装按需导入的babel插件

2. 修改项目中的`.babelrc`文件如下,新增节点被 `+`标识：

   ```json
   {
     "presets": ["env", "stage-0", "react"],
     "plugins": [
       "transform-runtime",
   +    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
     ]
   }
   ```

3. 当实现了前两步以后，我们在`main.js`中，就不需要再引入样式表了；

   ​


## 3. 基于Promise规范的fetch API的使用

### fetch的使用

1. 作用：fetch 这个API，是专门用来发起Ajax请求的；

2. fetch 是由原生 JS 提供的 API ，专门用来取代 XHR 这个对象的；

   ```js
   fetch('请求的url地址').then(response => res.json()).then(data= > console.log(data))
   // 注意： 第一个.then 中获取到的不是最终的数据，而是一个中间的数据流对象；
   // 注意： 第一个 .then 中获取到的数据，是 一个 Response 类型的对象；
   // 第二个 .then 中，获取到的才是真正的 数据；
   ```

3. 发起 Get 请求：

   ```js
   // 默认 fetch('url') 的话，发起的是 Get 请求
     fetch('http://39.106.32.91:3000/api/getlunbo')
       .then(response => {
         // 这个 response 就是 服务器返回的可读数据流，内部存储的是二进制数据；
         // .json() 的作用，就是 读取 response 这个二进制数据流，并把 读取到的数据，转为 JSON 格式的 Promise对象
         return response.json()
       })
       .then(data => {
         // 这里，第二个.then 中，拿到的 data，就是最终的数据
         console.log(data)
       })
   ```

   ​

4. 发起 Post 请求：

   ```js
   // 这是 查询参数   name=zs&age=20
     var sendData = new URLSearchParams()
     sendData.append('name', 'ls')
     sendData.append('age', 30)

     fetch('http://39.106.32.91:3000/api/post', {
       method: 'POST',
       body: sendData // 要发送给服务器的数据
     })
       .then(response => response.json())
       .then(data => console.log(data))
   ```

5. 注意： fetch 无法 发起 JSONP 请求



### fetch-jsonp的使用

1. `fetch-jsonp`最基本的用法：

   ```js
   fetchJsonp('https://api.douban.com/v2/movie/in_theaters')
     .then(function (response) {
       // response.json()   当我们为 response 对象调用了它的 .json() 方法以后，返回的是新的 promise 实例对象
       return response.json()
     })
     .then(function (result) {
       console.log(result)
     })
   ```

2. 注意事项：

   1. 在调用 fetchJsonp 的时候，小括号中写的就是 你请求的 API 地址
   2. 当调用 fetchJsonp  以后，得到的是一个 Promise  实例对象，需要为 这个 Promise 实例对象，通过`.then`指定成功的回调函数，在第一个 `.then()`中无法拿到最终的数据，拿到的是一个 `Response` 类型的对象；
   3. 在 第一个 `.then`中，需要`return response.json()`从而返回一个新的Promise 实例；
   4. 为 第一个 `.then()`中返回的promise实例，再次通过.then指定成功回调，拿到的才是最终的数据；

   > 总结: 第一个.then拿到的是中间数据;  第二个.then中拿到的才是最终的数据;





## 4. 项目结构搭建和布局



## 5. this.prop和Route的关系



## 6. 项目API接口地址

> 开发环境 - 请求根地址：`http://39.106.32.91:3005`
>
> 上线环境 - 请求根地址：`https://api.douban.com`

1. 正在热映：`/v2/movie/in_theaters?start=0&count=1`
2. 即将上映：`/v2/movie/coming_soon?start=0&count=1`
3. Top250：  `/v2/movie/top250?start=0&count=1`
4. 电影详情：`/v2/movie/subject/26861685`




## 相关文章

+ [ANT DESIGN 一个 UI 设计语言](https://ant.design/index-cn)

+ [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start)

+ [豆瓣电影API地址](https://developers.douban.com/wiki/?title=api_v2)

 - [正在热映 - in_theaters](https://api.douban.com/v2/movie/in_theaters)

 - [即将上映 - coming_soon](https://api.douban.com/v2/movie/coming_soon)

 - [top250](https://api.douban.com/v2/movie/top250)

 - [电影详细信息 - subject](https://api.douban.com/v2/movie/subject/26309788)

+ [跨域资源共享 CORS 详解 - 阮一峰](http://www.ruanyifeng.com/blog/2016/04/cors.html)

+ [Request - Simplified HTTP client](https://github.com/request/request)

+ [CSS3 transform 属性](http://www.w3school.com.cn/cssref/pr_transform.asp)

+ [ES6 - Promise规范 - 阮一峰](http://es6.ruanyifeng.com/#docs/promise)

+ [Javascript 中的神器——Promise](http://www.jianshu.com/p/063f7e490e9a)

+ [MDN - Fetch API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

+ [MDN - Response](https://developer.mozilla.org/zh-CN/docs/Web/API/Response)

+ [fetch-jsonp - 支持JSONP的Fetch实现](https://www.npmjs.com/package/fetch-jsonp)

