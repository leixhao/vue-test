https://tech.meituan.com/fe-overseas-practice.html   一篇比较好的技术文章

#### hash属性

```
hash属性是一个可读可写的字符串,改字符串是URL的锚部分(从#号开始的部分).
```

```
eg:
http://qq.com/test.html#part
  location.hash = #part
```



#### vue-router  路由

```
路由中有三个基本的概念 route, routes, router。

　　　　1， route，它是一条路由，由这个英文单词也可以看出来，它是单数， Home按钮  => home内容， 这是一条route,  about按钮 => about 内容， 这是另一条路由。

　　　　2， routes 是一组路由，把上面的每一条路由组合起来，形成一个数组。[{home 按钮 =>home内容 }， { about按钮 => about 内容}]

　　　　3， router 是一个机制，相当于一个管理者，它来管理路由。因为routes 只是定义了一组路由，它放在哪里是静止的，当真正来了请求，怎么办？ 就是当用户点击home 按钮的时候，怎么办？这时router 就起作用了，它到routes 中去查找，去找到对应的 home 内容，所以页面中就显示了 home 内容。

　　　　4，客户端中的路由，实际上就是dom 元素的显示和隐藏。当页面中显示home 内容的时候，about 中的内容全部隐藏，反之也是一样。客户端路由有两种实现方式：基于hash 和基于html5 history api.
```

