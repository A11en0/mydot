!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=103)}({103:function(e,t,n){"use strict";function i(){var e="",t="google";if(f.match(/google\.com(\.\w*)?\/search\?/)){var n=new URLSearchParams(window.location.search);e=n.get("q"),t="google"}else if(f.match(/\.baidu\.com\/s?/)){var i=new URLSearchParams(window.location.search);e=i.get("wd"),t="baidu";var c=document.getElementsByTagName("title")[0],a=window.MutationObserver||window.WebKitMutationObserver,r={childList:!0,subtree:!0,characterData:!0},d=new a(function(t){var n=new URLSearchParams(window.location.search);e=n.get("wd"),chrome.runtime.sendMessage({type:"search",key:"baidu",value:e},function(e){e&&o(e)})});d.observe(c,r)}else if(f.match(/\.so\.com\/s\?/)){var s=new URLSearchParams(window.location.search);e=s.get("q"),t="360",g&&g.addEventListener("click",function(){setTimeout(function(){var t=new URLSearchParams(window.location.search);e=t.get("q"),chrome.runtime.sendMessage({type:"search",key:"360",value:e},function(e){e&&o(e)})},1e3)})}else if(f.match(/\.sogou\.com\/web\?/)){var m=new URLSearchParams(window.location.search);e=m.get("query"),t="sogou"}else if(f.match(/\.dogedoge\.com\/results\?/)){var u=new URLSearchParams(window.location.search);e=u.get("q"),t="dogedoge"}else if(f.match(/cn\.bing\.com\/search\?/)){var l=new URLSearchParams(window.location.search);e=l.get("q"),t="bing_cn"}chrome.runtime.sendMessage({type:"search",key:t,value:e},function(e){e&&o(e)})}function o(e){var t=document.querySelector("#rhs"),n=document.createElement("div"),i=!1;"google"===e.key?n.setAttribute("class","pinbox-recommend pinbox-recommend-google"):"baidu"===e.key?(t=document.querySelector("#content_right"),n.setAttribute("class","pinbox-recommend-baidu")):"360"===e.key?(t=document.querySelector("#side"),n.setAttribute("class","pinbox-recommend")):"sogou"===e.key?(t=document.querySelector("#right"),n.setAttribute("class","pinbox-recommend-sogou")):"dogedoge"===e.key?(t=document.querySelector("#links_wrapper"),n.setAttribute("class","pinbox-recommend-dogedoge")):"bing_cn"===e.key&&(t=document.querySelector("#b_context"),n.setAttribute("class","pinbox-recommend"));var o=document.createElement("div");o.setAttribute("class","pinbox-recommend-close"),o.onclick=function(e){e.stopPropagation(),chrome.runtime.sendMessage({type:"setLinkSeach",linkSeach:!1}),t.removeChild(n)};var d=document.createElement("div");d.setAttribute("class","pinbox-logo"),d.onclick=function(){window.open(m.b+"/items")},n.appendChild(d),n.appendChild(o);for(var s=0;s<e.data.items.length;s++){var u,u,u;!function(){var t=e.data.items[s];if("website"==t.item_type){i=!0;var o=document.createElement("a"),d=document.createElement("div"),l=document.createElement("div"),p=document.createElement("div");o.setAttribute("class","pinbox-recommend-item"),d.setAttribute("class","pinbox-recommend-item-title"),l.setAttribute("class","pinbox-recommend-item-tagbox"),p.setAttribute("class","pinbox-recommend-item-url"),d.innerHTML=t.title,o.href=t.link||t.url,o.target="_blank",o.onmousedown=function(e){1!=e.which&&2!=e.which||chrome.runtime.sendMessage({type:"addView",id:t.id})},u=t.link||t.url,u.match(/.+:\/\/([^\/^\?^#]+)/)&&(u=u.match(/.+:\/\/([^\/^\?^#]+)/)[1]);for(var h=0;h<t.tags.length;h++)!function(e){var n=document.createElement("div");n.setAttribute("class","pinbox-recommend-item-tag-item"),n.innerHTML="# "+t.tags[e],n.onclick=function(n){n.preventDefault(),window.open(m.b+"/tag/"+t.tags[e]+"?category=all")},l.appendChild(n)}(h);p.innerHTML=u,o.appendChild(d),o.appendChild(l),o.appendChild(p),n.appendChild(o)}else if("text"==t.item_type){i=!0;var b=document.createElement("div"),g=document.createElement("div"),f=document.createElement("div"),v=document.createElement("div");b.setAttribute("class","pinbox-recommend-item"),g.setAttribute("class","pinbox-recommend-item-text"),f.setAttribute("class","pinbox-recommend-item-tagbox"),v.setAttribute("class","pinbox-recommend-item-url"),g.innerHTML='<div class="pinbox-recommend-item-text-content">'+t.content+"</div>",g.onclick=function(){chrome.runtime.sendMessage({type:"addView",id:t.id}),a(t)},v.onclick=function(){chrome.runtime.sendMessage({type:"addView",id:t.id}),c(t.link||t.url)},u=t.link||t.url,u.match(/.+:\/\/([^\/^\?^#]+)/)&&(u=u.match(/.+:\/\/([^\/^\?^#]+)/)[1]);for(var h=0;h<t.tags.length;h++)!function(e){var n=document.createElement("div");n.setAttribute("class","pinbox-recommend-item-tag-item"),n.innerHTML="# "+t.tags[e],n.onclick=function(){window.open(m.b+"/tag/"+t.tags[e]+"?category=all")},f.appendChild(n)}(h);v.innerHTML=u||"无来源",u||(v.style.cursor="default"),b.appendChild(g),b.appendChild(f),b.appendChild(v),n.appendChild(b)}else if("image"==t.item_type){i=!0;var y=document.createElement("div"),x=document.createElement("div"),w=document.createElement("div"),C=document.createElement("div");y.setAttribute("class","pinbox-recommend-item"),x.setAttribute("class","pinbox-recommend-item-text"),w.setAttribute("class","pinbox-recommend-item-tagbox"),C.setAttribute("class","pinbox-recommend-item-url"),x.innerHTML='<img class="pinbox-recommend-item-img-content" src="'+t.image_url+'" />',x.onclick=function(){chrome.runtime.sendMessage({type:"addView",id:t.id}),r(t)},C.onclick=function(){chrome.runtime.sendMessage({type:"addView",id:t.id}),c(t.link||t.url)},u=t.link||t.url,u.match(/.+:\/\/([^\/^\?^#]+)/)&&(u=u.match(/.+:\/\/([^\/^\?^#]+)/)[1]);for(var h=0;h<t.tags.length;h++)!function(e){var n=document.createElement("div");n.setAttribute("class","pinbox-recommend-item-tag-item"),n.innerHTML="# "+t.tags[e],n.onclick=function(){window.open(m.b+"/tag/"+t.tags[e]+"?category=all")},w.appendChild(n)}(h);C.innerHTML=u||"无来源",u||(C.style.cursor="default"),y.appendChild(x),y.appendChild(w),y.appendChild(C),n.appendChild(y)}}()}if(e.data.items_count>6){var l=document.createElement("div");l.setAttribute("class","pinbox-recommend-more"),l.innerText="查看更多",l.onclick=function(){window.open(m.b+"/search?q="+e.value)},n.appendChild(l)}document.querySelector(".pinbox-recommend-baidu")?(t.removeChild(document.querySelector(".pinbox-recommend-baidu")),i&&t.insertBefore(n,t.firstChild)):i&&t.insertBefore(n,t.firstChild)}function c(e){e&&chrome.runtime.sendMessage({type:"createTab",url:e})}function a(e){var t=document.createElement("div"),n=document.createElement("div");t.setAttribute("class","pinbox-text-view-box"),n.setAttribute("class","pinbox-text-view-content"),n.innerHTML=e.content,t.onclick=function(){document.body.removeChild(t)},n.onclick=function(e){e.stopPropagation()},t.appendChild(n),document.body.appendChild(t)}function r(e){var t=document.createElement("div"),n=document.createElement("img");t.setAttribute("class","pinbox-text-view-box"),n.setAttribute("class","pinbox-image-view-content"),n.src=e.image_url,t.onclick=function(){document.body.removeChild(t)},n.onclick=function(e){e.stopPropagation()},t.appendChild(n),document.body.appendChild(t)}function d(){var e=document.createElement("div");e.setAttribute("class","image-hover-btn"),e.setAttribute("id","pinbox_image_hover_btn"),e.innerText="收藏",document.body.appendChild(e),document.addEventListener("mouseover",function(t){if("img"===t.target.nodeName.toLocaleLowerCase()){var n=t.target;(n.clientWidth>199||n.clientHeight>199)&&(e.style.top=t.pageY-t.offsetY+8+"px",e.style.left=t.pageX-t.offsetX+8+"px",e.style.display="block",e.onclick=function(){var e=new URL(n.getAttribute("src"),window.location.href).href;chrome.runtime.sendMessage({type:"addImage",src:e})})}else{var i=t.target,o=function(e){return e.currentStyle||document.defaultView.getComputedStyle(e,null)}(i).backgroundImage;o&&(o=o.match(/"(.+)"/)&&o.match(/"(.+)"/)[1]),o?i.clientWidth>199&&i.clientHeight>199&&(e.style.top=t.pageY-t.offsetY+4+"px",e.style.left=t.pageX-t.offsetX+4+"px",e.style.display="block",e.onclick=function(){var e=new URL(o,window.location.href).href;chrome.runtime.sendMessage({type:"addImage",src:e})}):"pinbox_image_hover_btn"!==t.target.id&&(e.style.display="none")}})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(104),m=n(4),u=document.createElement("span");u.setAttribute("id","pinbox-extension-installed"),document.body.appendChild(u);var l=null,p=document.querySelector("#pinbox-iframe"),h=!1,b=document.querySelector("#su"),g=document.querySelector("#su"),f=window.location.href;chrome.runtime.sendMessage({type:"getShortcut"},function(e){l=e.data}),chrome.runtime.sendMessage({type:"getOptionConfig"},function(e){if(h=e.imageHoverBtn)document.querySelector("#pinbox_image_hover_btn")||d();else{var t=document.querySelector("#pinbox_image_hover_btn");t&&document.body.removeChild(t)}}),window.addEventListener("mousedown",function(){(p=document.querySelector("#pinbox-iframe"))&&document.body.removeChild(p)}),chrome.runtime.onMessage.addListener(function(e,t,n){"unloadIframe"===e.type?(p=document.querySelector("#pinbox-iframe"))&&document.body.removeChild(p):"checkIframe"===e.type&&(p=document.querySelector("#pinbox-iframe"),n(p?!0:!1))});var v,y=0;window.addEventListener("message",function(e){e.source==window&&"pinbox"===e.data.type&&("login"===e.data.action?chrome.runtime.sendMessage({type:"pinboxLogin"},function(e){l=e.data}):"logout"===e.data.action?chrome.runtime.sendMessage({type:"pinboxLogout"}):"updateShortcutKey"===e.data.action?chrome.runtime.sendMessage({type:"updateShortcutKey"},function(e){l=e.data}):"collectOrderChanged"===e.data.action?chrome.runtime.sendMessage({type:"collectOrderChanged"}):"itemOrderChanged"===e.data.action?chrome.runtime.sendMessage({type:"itemOrderChanged"}):"updateHasChecked"===e.data.action?chrome.runtime.sendMessage({type:"updateHasChecked",data:e.data.data}):"updateItemDate"===e.data.action?chrome.runtime.sendMessage({type:"updateItemDate",data:e.data.data}):"collectChanged"===e.data.action?chrome.runtime.sendMessage({type:"collectChanged"}):"updateTag"===e.data.action&&chrome.runtime.sendMessage({type:"updateTag"}))},!1),document.addEventListener("keyup",function(e){if(18==(e.keyCode||e.which)){var t=document.getElementById("Pinbox_shortcutBox");t&&(document.body.removeChild(t),y=0,chrome.runtime.sendMessage({type:"addView",id:v.id}),c(v.link||v.url))}}),document.addEventListener("keydown",function(e){var t=e.keyCode||e.which;if(e.altKey){if(null==l&&18!=t&&!l)return;if(l&&l[s.a[t]]&&l[s.a[t]].length>1){var n=document.createElement("div");n.setAttribute("id","Pinbox_shortcutBox"),n.setAttribute("class","pinbox-shortcut-box"),n.onclick=function(){document.body.removeChild(n)};var i=document.createElement("div");i.setAttribute("id","Pinbox_shortcutContent"),i.setAttribute("class","pinbox-shortcut-content"),i.onclick=function(e){e.stopPropagation()},l[s.a[t]].forEach(function(e){var t=document.createElement("div");t.setAttribute("class","pinbox-shortcut-item"),t.onclick=function(){document.body.removeChild(n),y=0,chrome.runtime.sendMessage({type:"addView",id:e.id}),c(e.link||e.url)};var o=document.createElement("div"),a=document.createElement("div");if(o.setAttribute("class","pinbox-shortcut-item-title"),o.innerHTML=e.brief||e.title,e.thumbnail||e.cover)a.setAttribute("class","pinbox-shortcut-item-des"),a.style.backgroundImage="url("+(e.cover||e.thumbnail)+")";else{var r=e.brief||e.title;a.setAttribute("class","pinbox-shortcut-item-des-default"),a.innerHTML=r.trim().substring(0,1)}var d=e.note||e.description;if(d){var s=document.createElement("div");s.setAttribute("class","pinbox-shortcut-item-note"),s.innerHTML=d,a.appendChild(s)}var m=document.createElement("div"),u=document.createElement("div"),l=document.createElement("div");m.setAttribute("class","pinbox-shortcut-item-bottom"),u.setAttribute("class","pinbox-shortcut-item-icon");var p=e.link||e.url;p&&p.match(/.+:\/\/([^\/^\?^#]+)/)&&(e.favicon=p.match(/.+:\/\/([^\/^\?^#]+)/)[0]+"/favicon.ico"),e.favicon&&(u.style.backgroundImage="url("+e.favicon+")"),l.setAttribute("class","pinbox-shortcut-item-url"),p.match(/.+:\/\/([^\/^\?^#]+)/)&&(p=p.match(/.+:\/\/([^\/^\?^#]+)/)[1]),l.innerHTML=p,m.appendChild(u),m.appendChild(l),t.appendChild(o),t.appendChild(a),t.appendChild(m),i.appendChild(t)});if(document.getElementById("Pinbox_shortcutBox"))y<l[s.a[t]].length-1?y++:y=0,v=l[s.a[t]][y];else{n.appendChild(i),document.body.appendChild(n);var o=document.getElementById("Pinbox_shortcutContent");o.firstChild.classList.add("pinbox-shortcut-item-active"),v=l[s.a[t]][0]}var a=document.getElementById("Pinbox_shortcutContent"),o=Array.from(a.children);o.forEach(function(e,t){t==y?(e.classList.add("pinbox-shortcut-item-active"),e.offsetTop+e.offsetHeight-a.clientHeight>0?a.scrollTop=e.offsetTop+e.offsetHeight-a.clientHeight:a.scrollTop=0):e.classList.remove("pinbox-shortcut-item-active")})}else l&&l[s.a[t]]&&1==l[s.a[t]].length&&(chrome.runtime.sendMessage({type:"addView",id:l[s.a[t]][0].id}),c(l[s.a[t]][0].link||l[s.a[t]][0].url))}}),window.addEventListener("load",function(){b=document.querySelector("#su"),g=document.querySelector("#su"),i()})},104:function(e,t,n){"use strict";var i={65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",48:0,49:1,50:2,51:3,52:4,53:5,54:6,55:7,56:8,57:9,96:0,97:1,98:2,99:3,100:4,101:5,102:6,103:7,104:8,105:9,192:"`",189:"-",187:"=",219:"[",221:"]",186:";",222:"'",188:",",190:".",191:"/",220:"\\"};t.a=i},4:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return c});var i="https://withpinbox.com/api/",o="https://withpinbox.com",c=!1}});