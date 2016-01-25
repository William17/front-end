# DOM是什么

DOM全称Document Object Model.  

>The Document Object Model is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents. The document can be further processed and the results of that processing can be incorporated back into the presented page. This is an overview of DOM-related materials here at W3C and around the web.---- <cite>[W3C][1]</cite>  

<br />
>The Document Object Model (DOM) is a cross-platform and language-independent convention for representing and interacting with objects in HTML, XHTML, and XML documents. The nodes of every document are organized in a tree structure, called the DOM tree. Objects in the DOM tree may be addressed and manipulated by using methods on the objects. The public interface of a DOM is specified in its application programming interface (API).---- <cite>[WIKI](2)</cite>


#Document Object Model (DOM) Technical Reports
https://www.w3.org/DOM/DOMTR  


#DOM Levels

>DOM Levels are essentially versions.
DOM Level 1 defines the core elements of the Document Object Model. DOM Level 2 extends those elements and adds events. DOM Level 3 extends DOM lvl 2 and adds more elements and events.----<cite>[stackoverflow][3]</cite>




#DOM Trees
```html
<!-- document proto-chain: HTMLDocument - Document - Node - EventTarget-->
  <html><!-- document.documentElement chain: HTMLHtmlElement - HTMLElement - Element - Node - EventTarget -->
    <head><!-- document.head chain: HTMLHeadElement - HTMLElement - Element - Node - EventTarget -->
    </head>
    <body><!-- document.body chain: HTMLBodyElement - HTMLElement - Element - Node - EventTarget -->
    </body>
  </html>
```

[1]: https://www.w3.org/DOM/ "W3C"
[2]: https://en.wikipedia.org/wiki/Document_Object_Model "WIKI"
[3]: http://stackoverflow.com/questions/6629093/what-are-dom-levels