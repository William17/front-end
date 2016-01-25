## Document
* `Document#createElement(tagName)`
* `Document#createTextNode(str)`

* `Document#getElementById(elementId)`
  * IE678中会获取到`[name=elementId]`的部分元素, 所以注意页面中的元素的`id` 属性值不能与其他元素的`name`属性值有重复[1]
  * IE678中`elementId`大小写不敏感, 规范里它应该大小写敏感.[^2]
* `Document#getElementsByTagName(tagName)`
* `Document#getElementsByClassName(className)`
* `Document#querySelector(selector)`
* `Document#querySelectorAll(selector)`

## Element
* `element.id`
* `element.className`
* `element.name`
* `element.innerHTML`
  * 通常用来修改元素的html内容
  * 插入的内容会被解析和执行, 所以可能会有xss攻击
  * 如果只是插入纯文本内容, 建议使用`node.textContent`
  * 详细看[MDN][9]
* `element.classList`
  * IE10以上支持`classList`
  * 方法
    * `element.classList.add(value)`
    * `element.classList.remove(value)`
    * `element.classList.toggle(value[, testCondition])`
      * 目前(2016年1月22日)IE不支持`toggle`方法第二个参数
    * `element.classList.contains(value)`
* `Element#getElementsByTagName(tagName)`
* `Element#getElementsByClassName(className)`
* `Element#querySelector(selector)`
* `Element#querySelectorAll(selector)`
  * IE8+支持`querySelector`和`querySelectorAll`, 但IE8仅支持CSS2.1选择器[^4]


## Node
* `node.nodeType` 
  * 1 为`Node.ELEMENT_NODE`, 3 为`Node.TEXT_NODE`
* `node.nodeName`
  * 如果节点类型为`Node.ELEMENT_NODE`,返回标签名;如果节点类型为`Node.ELEMENT_NODE`, 返回'#text'
  * 如果要比较标签名, 最好先把它`upperCase`或`lowerCase`[^6]
  * 可以用来获取标签名
* `node.nodeValue`
  * 通常用来获取和设置文本节点的内容
* `node.textContent`
  * 通常用来获取和设置标签元素里的<em>文本</em>内容
    * 获取到的内容其实是所有子孙节点的文本内容串起来, 所以不包含任何html
    * 如果设置的内容含有html, 这些html不会被解析, 而是当做纯文本
  * `document.textContent`为null, 如果需要获取文档文本, 应该用`document.documentElement.textContent`
  * IE9+支持这个方法
  * IE8及以下使用`element.innerText`
  * 详细请看[MDN][8]

* `Node#hasAttribute(attr)`
* `Node#getAttribute(attr)`
* `Node#setAttribute(attr, value)`
* `Node#removeAttribute(attr)`

* `Node#parentNode` 
* `Node#previousSibling`
* `Node#nextSibling

* `Node#childNodes`
* `Node#children`
* `Node#firstChild`
* `Node#lastChild`
* `Node#hasChildNodes()`

* `Node#appendChild(node)`
* `Node#removeChild(node)`
* `Node#replaceChild(newNode, oldNode)`
* `Node#insertBefore(newNode, existingNode)`

* `Node#cloneNode(deep)`
  * 这个方法不会复制事件[^7]
  * 如果`deep`为`true`, 则会复制整个节点树; 如果为`false`, 则只会复制当前标签.[^7]
  * 使用的时候最好传入`deep`参数, 因为部分浏览器默认为`true`, 有些则为`false`[^7]

## EventTarget
* `EventTarget#addEventListener(type, listener[, useCapture = true])`
  * IE9+ 支持
  * IE8及一下使用 `attachEvent`, 并且应该包装一下监听函数, 因为回调函数执行是`this`指向的不是该元素, 而且`event`参数缺少`target`等, 还要注意的是, `attachEvent`事件名要加`on`,详情见[MDN][10]
* `EventTarget#removeEventListener(type, listener[, useCapture])
  * IE9+ 支持
  * IE8及一下使用 `detachEvent`, 并且应该包装一下监听函数, 因为回调函数执行是`this`指向的不是该元素, 而且`event`参数缺少`target`等,还要注意的是, `detachEvent`事件名要加`on`, 详情见[MDN][10]
* `EventTarget#dispatchEvent`

## Event
* `event.currentTarget`
  * 事件所绑定的元素
* `event.target`
  * 事件发生的元素

## HTMLDocument
* `HTMLDocument#getElementsByName(elementName)`
  * IE678中`elementName`大小写不敏感, 规范里它应该大小写敏感.[^3]
  * 在 IE 中，只有`BUTTON, TEXTAREA, APPLET, SELECT, FORM, FRAME, IFRAME, IMG, A, INPUT, OBJECT, MAP, PARAM, META`这些标签有 'name' 属性时，可以使用这个方法获取他们创建的 DOM 元素，但在其他浏览器中，有 'name' 属性的其他标签也可以用这种方法获取。即 <DIV name='test'><DIV> 可以在其他浏览器中通过使用 document.getElementsByName('test')[0] 来获取，但在 IE 中却不行，得到的将是 undefined.[^3]

## HTMLElement
* style属性
  stye属性是定义在HTMLElement.prototype是的访问器属性,而且只有get方法, 所以只能通过下面方法设置style, 而不同直接
  `htmlElement.style = 'xxx:xxxx;'`
  * `htmlElement#style.<css_attribute>`
  * `htmlElement#style.<css_attribute> = value`

* 特定HTMLElement的属性
  有一些特定的HTMLElement,例如HTMLAnchorElement,HTMLParagraphElement等, 他们都继承自HTMLElement.  
  这些特定的HTMLElement的标准属性可以用下面的方法直接获取和设置, 这些标准属性一般都在原型上定义有访问器属性.
  例如 `a.href = 'xxxx'`, `img.src = 'xxxxx'`
  * `htmlElement.<attribute_name>`
  * `htmlElement.<attribute_name> = value`



[1]: http://w3help.org/zh-cn/causes/SD9001
[2]: http://w3help.org/zh-cn/causes/SD9002
[3]: http://w3help.org/zh-cn/causes/SD9012
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
[6]: http://ejohn.org/blog/nodename-case-sensitivity/
[7]: https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
[8]: https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
[9]: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
[10]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener