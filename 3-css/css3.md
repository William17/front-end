## flex
[1] [2]

## transition

## transform
transform-style: preserve-3d

## animation
@key-frames
```html
<!DOCTYPE html>
<html>
<head>
  <style> 
    div{
      width:100px;
      height:100px;
      background:red;
      position:relative;
      animation-name:myfirst;
      animation-duration:5s;
      animation-timing-function:linear;
      animation-delay:2s;
      animation-iteration-count:infinite;
      animation-direction:alternate;
      animation-play-state:running;
      /* Safari and Chrome: */
      -webkit-animation-name:myfirst;
      -webkit-animation-duration:5s;
      -webkit-animation-timing-function:linear;
      -webkit-animation-delay:2s;
      -webkit-animation-iteration-count:infinite;
      -webkit-animation-direction:alternative;
      -webkit-animation-play-state:running;
    }

    @keyframes myfirst{
      0%   {background:red; left:0px; top:0px;}
      25%  {background:yellow; left:200px; top:0px;}
      50%  {background:blue; left:200px; top:200px;}
      75%  {background:green; left:0px; top:200px;}
      100% {background:red; left:0px; top:0px;}
    }

    @-webkit-keyframes myfirst {
      0%   {background:red; left:0px; top:0px;}
      25%  {background:yellow; left:200px; top:0px;}
      50%  {background:blue; left:200px; top:200px;}
      75%  {background:green; left:0px; top:200px;}
      100% {background:red; left:0px; top:0px;}
    }
  </style>
</head>
<body>
<div></div>
</body>
</html>
```

## media

## 模板


## 例子
[3]
[4]

[1]: http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
[2]: http://www.ruanyifeng.com/blog/2015/07/flex-examples.html
[3]: https://daneden.github.io/animate.css/
[4]: http://inspire.blufra.me/amazing-collection-animation-and-transition-effect-roundups/