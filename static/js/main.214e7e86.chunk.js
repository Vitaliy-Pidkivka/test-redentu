(this["webpackJsonptest-redentu"]=this["webpackJsonptest-redentu"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={button:"Button_button__3GV2j"}},,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),r=n.n(c),l=(n(13),n(3)),s=n(4),i=n(6),u=n(7),d=(n(14),n(5)),f=n.n(d),m=function(e){return a.a.createElement("button",{className:"".concat(f.a.button," ").concat(e.className&&e.className),onClick:e.onClick},e.value)},g=function(e){return a.a.createElement("span",{style:{fontSize:e.fontSize||"20px",color:e.color||"black",background:e.background}||"white"},e.text+" ")},h=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={text:"Hi My lovely little Ponny",cutText:"",focusOffset:0,anchorOffset:0,textNodes:[]},e.getRangeObject=function(t){if((t=t||window).getSelection)try{return t.getSelection().getRangeAt(0)}catch(o){}else if(t.document.selection){var n=t.document.selection.createRange();return e.fixIERangeObject(n,t)}return null},e.setNewCutText=function(){var t=e.getRangeObject();t?e.setState({text:t.startContainer.nodeValue,cutText:t.toString(),focusOffset:t.startOffset,anchorOffset:t.endOffset}):alert("\u0412\u0438\u0434\u0456\u043b\u0456\u0442\u044c \u0442\u0435\u043a\u0441\u0442")},e.nodeToJson=function(){var t=document.querySelector(".text"),n=[],o=0;!function e(t){t.childNodes.forEach((function(t){if(t.nodeName.match(/^SPAN/)){var a={id:o,text:t.textContent,fontSize:t.style.fontSize?t.style.fontSize:"20px",color:t.style.color?t.style.color:"black",background:t.style.background?t.style.background:"white",nodeName:t.nodeName};o++,n.push(a)}else e(t)}))}(t),e.setState({textNodes:n},(function(){alert("\u0412\u0456\u0434\u043a\u0440\u0438\u0439\u0442\u0435 \u043a\u043e\u043d\u0441\u043e\u043b\u044c"),console.log(JSON.stringify(e.state.textNodes))}))},e.changeColor=function(){e.domRangeHighlight(e.state.cutText,"color")},e.changeBg=function(){e.domRangeHighlight(e.state.cutText,"background")},e.zoomInFont=function(){e.domRangeHighlight(e.state.cutText,"font")},e.createBr=function(){e.domRangeHighlight(e.state.cutText,"br")},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.querySelector(".text").innerHTML="".concat(this.state.text)}},{key:"domRangeHighlight",value:function(e,t){var n=document.querySelector(".text").firstChild,o=n.nodeValue;if(~o.indexOf(e)){if(document.createRange){var a=document.createRange();a.setStart(n,o.indexOf(e)),a.setEnd(n,o.indexOf(e)+e.length);var c=document.createElement("span"),r=document.createElement("br");"color"===t?c.style.color="blue":"background"===t?c.style.background="red":"font"===t?c.style.fontSize="40px":c.style.background="white","br"===t?a.surroundContents(r):a.surroundContents(c)}}else alert("\u041d\u0435\u043c\u0430\u0454 \u0437\u0431\u0456\u0433\u0456\u0432")}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("span",{spellCheck:!0,className:"text",onMouseUp:this.setNewCutText}),a.a.createElement("div",null,this.state.textNodes.map((function(e){return a.a.createElement(g,Object.assign({key:e.id},e))}))),a.a.createElement("div",{className:"buttons"},a.a.createElement(m,{onClick:this.changeBg,className:"button",value:"change bg"}),a.a.createElement(m,{onClick:this.changeColor,className:"button",value:"change color"}),a.a.createElement(m,{onClick:this.zoomInFont,className:"button",value:"zoom in font"}),a.a.createElement(m,{onClick:this.createBr,className:"button",value:"br"}),a.a.createElement(m,{onClick:this.nodeToJson,className:"button",value:"create JSON"})))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.214e7e86.chunk.js.map