;(function(psdWidth,dividendFontSize,maxRootFontSize){
      // 为了代码更短
      var d = document
      var de = d.documentElement
      var w = window
      var on = 'addEventListener'
      var gbcr = 'getBoundingClientRect'
      var ps = 'pageshow'

      var head = d.head || d.getElementsByTagName('HEAD')[0]
      var style = d.createElement('STYLE') // 采用拼css的形式，而不是直接用document.documentElement.style.fontSize的形式的原因是，拼css可以通过加入!important获得最高优先级，http://jsbin.com/dopupudago/2/edit?html,js,output
      var resizeEventThrottleTimer

      // 移除任何text-size-adjust对字体大小的改变效果
      var textSizeAdjustCSS = 'text-size-adjust:100%;'
      var textSizeAdjustCSSAll = 
        '-webkit-'+textSizeAdjustCSS
        +'-moz-'+textSizeAdjustCSS
        +'-ms-'+textSizeAdjustCSS
        +'-o-'+textSizeAdjustCSS
        +textSizeAdjustCSS
      
      var hasGbcr = gbcr in de
      var lastRootFontSize = null // 上一次设置的html的font-size
      function setRem(){
        var rootFontSize = Math.min(
          (
            hasGbcr?
              de[gbcr]().width // document.documentElement.getBoundingClientRect() iOS4.0+ 安卓2.0+  https://developer.mozilla.org/zh-CN/docs/Web/API/Element.getBoundingClientRect
              :w.innerWidth
          )
            /(psdWidth/dividendFontSize)
          ,maxRootFontSize
        )
        // alert('2 iW_'+w.innerWidth+'  sw_'+w.screen.width+'  dpr_'+devicePixelRatio+'  or_'+w.orientation+'  gbcrw_'+d.documentElement.getBoundingClientRect().width)
        if(rootFontSize != lastRootFontSize){
          // return
          style.innerHTML = 
            'html{'
            + 'font-size:'+rootFontSize+'px!important;' // 20=320/16 // 取16为默认html的font-size是因为浏览器都默认为16，不会导致抖动
            + textSizeAdjustCSSAll
            +'}'
          lastRootFontSize = rootFontSize
        }
      }

      // 在一定延时内稀释setRem的调用
      function trySetRem(){
        clearTimeout(resizeEventThrottleTimer)
        resizeEventThrottleTimer = setTimeout(setRem,500)
      }

      psdWidth = psdWidth || 320
      dividendFontSize = dividendFontSize || 16
      maxRootFontSize = maxRootFontSize || 32
      head.appendChild(style)
      
      d[on]('DOMContentLoaded',setRem,false)
      // 安卓在页面刚载入时w.screen.width不一定正确，特别是从一个未设置viewport meta的页面跳转过来时，需要多调整几次。见图：“show/2.3.6_从一个未设置viewport的页面跳转过来时，起初innerWidth和screen.width都是不对的.png”，于是在pageshow或onload事件触发时再设置一次
      if('on'+ps in w){
        w[on](ps,function(e){
          if(e.persisted){
            trySetRem()
          }
        },false)
      }else{
        w[on]('load',trySetRem,false)
      }

      w[on]('resize',trySetRem,false)

      setRem()
    })(
      640, // 设置设计稿基准宽度
      32, // 设置开发时的被除数（见HOW TO USE第4步） 在设计稿基准宽度为320时最好设置为16（在在设计稿基准宽度为其他值时等比放大，如640时设置为32等）。因为浏览器默认的值就是16，这样代码失效或尚未起效时，不会有布局问题
      32 // 设置最大根元素font-size，请注意这是一个css像素值，而非物理像素值。它的作用是，当用户用非常宽的屏幕（pad、pc）访问页面时，不至于使得根元素的font-size超过这个值，使得布局非常难看。见图“show/wide_max_rem.jpg”
    )