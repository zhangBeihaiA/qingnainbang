(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0676":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports["default"]=t.exports},"0848":function(t,e,n){"use strict";n.r(e);var r=n("c6f1"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function a(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var o=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,a)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(o.length>1){var c=o.pop();u=o.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=o[0];console[s](u)}n.r(e),n.d(e,"log",(function(){return s})),n.d(e,"default",(function(){return o}))},"11b0":function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},2236:function(t,e,n){var r=n("5a43");t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},"2ece":function(t,e,n){"use strict";n.r(e);var r=n("49e9"),i=n("b271");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=o.exports},3210:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},3730:function(t,e,n){"use strict";n.r(e);var r=n("cc7c"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},"3c62":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","newsBox"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","pic"),attrs:{_i:1}},[n("image",{attrs:{src:t._$s(2,"a-src",t.item.picurl),_i:2}})]),n("view",{staticClass:t._$s(3,"sc","text"),attrs:{_i:3}},[n("view",{staticClass:t._$s(4,"sc","title"),attrs:{_i:4}},[t._v(t._$s(4,"t0-0",t._s(t.item.title)))]),t._$s(5,"i",!t.item.looktime)?n("view",{staticClass:t._$s(5,"sc","info"),attrs:{_i:5}},[n("text",[t._v(t._$s(6,"t0-0",t._s(t.item.author)))]),n("text",[t._v(t._$s(7,"t0-0",t._s(t.item.hits)))])]):n("view",{staticClass:t._$s(8,"sc","info"),attrs:{_i:8}},[n("text",[t._v(t._$s(9,"t0-0",t._s(t.item.looktime)))])])])])},i=[]},"448a":function(t,e,n){var r=n("2236"),i=n("11b0"),a=n("6613"),s=n("0676");t.exports=function(t){return r(t)||i(t)||a(t)||s()},t.exports.__esModule=!0,t.exports["default"]=t.exports},"49e9":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","detail"),attrs:{_i:0}},[n("view",{staticClass:t._$s(1,"sc","title"),attrs:{_i:1}},[t._v(t._$s(1,"t0-0",t._s(t.detailData.title)))]),n("view",{staticClass:t._$s(2,"sc","info"),attrs:{_i:2}},[n("view",{staticClass:t._$s(3,"sc","author"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.detailData.author)))]),n("view",{staticClass:t._$s(4,"sc","time"),attrs:{_i:4}},[t._v(t._$s(4,"t0-0",t._s(t.detailData.posttime)))])]),n("view",{staticClass:t._$s(5,"sc","content"),attrs:{_i:5}},[n("rich-text",{attrs:{nodes:t._$s(6,"a-nodes",t.detailData.content),_i:6}})]),n("view",{staticClass:t._$s(7,"sc","description"),attrs:{_i:7}})])},i=[]},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"5a43":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports["default"]=t.exports},6613:function(t,e,n){var r=n("5a43");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"6ac1":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={NewsBox:n("bf0d").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:t._$s(0,"sc","home"),attrs:{_i:0}},[r("scroll-view",{staticClass:t._$s(1,"sc","navScroll"),attrs:{_i:1}},t._l(t._$s(2,"f",{forItems:t.navList}),(function(e,n,i,a){return r("view",{key:t._$s(2,"f",{forIndex:i,key:e.id}),staticClass:t._$s("2-"+a,"sc","item"),class:t._$s("2-"+a,"c",n==t.navIndex?"active":""),attrs:{_i:"2-"+a},on:{click:function(r){return t.clickNav(n,e.id)}}},[t._v(t._$s("2-"+a,"t0-0",t._s(e.classname)))])})),0),r("view",{staticClass:t._$s(3,"sc","content"),attrs:{_i:3}},[t._l(t._$s(4,"f",{forItems:t.newsList}),(function(e,n,i,a){return r("view",{key:t._$s(4,"f",{forIndex:i,key:e.id}),staticClass:t._$s("4-"+a,"sc","row"),attrs:{_i:"4-"+a}},[r("NewsBox",{attrs:{item:e,_i:"5-"+a},nativeOn:{click:function(n){return t.goDetail(e)}}})],1)})),t._$s(6,"i",!t.newsList.length)?r("view",{staticClass:t._$s(6,"sc","noData"),attrs:{_i:6}},[r("image",{attrs:{src:t._$s(7,"a-src",n("8791")),_i:7}})]):t._e(),t._$s(8,"i",t.newsList.length)?r("view",{staticClass:t._$s(8,"sc","loading"),attrs:{_i:8}},[t._$s(9,"i",1==t.loading)?r("view"):t._e(),t._$s(10,"i",2==t.loading)?r("view"):t._e()]):t._e()],2)])},a=[]},"6c11":function(t,e,n){"use strict";n.r(e);var r=n("8b45"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},7037:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},8791:function(t,e){t.exports="/static/images/nodata.png"},"89cb":function(t,e,n){"use strict";n.r(e);var r=n("b185"),i=n("0848");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=o.exports},"8b45":function(t,e,n){"use strict";(function(t){var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("448a")),a={data:function(){return{navIndex:0,navList:[],newsList:[],currentPage:1,loading:0}},onLoad:function(){this.getNavData(),this.getNewsList()},onReachBottom:function(){2!=this.loading&&(this.currentPage++,this.loading=1,this.getNewsList())},methods:{clickNav:function(t,e){this.navIndex=t,this.currentPage=1,this.loading=0,this.newsList=[],this.getNewsList(e)},goDetail:function(e){t("log",e," at pages/index/index.vue:63"),uni.navigateTo({url:"/pages/detail/detail?cid=".concat(e.classid,"&id=").concat(e.id)})},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(e){t.navList=e.data||[]}})},getNewsList:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{num:8,cid:n,page:this.currentPage},success:function(n){0==n.data.length&&(e.loading=2,t("log","loading22"," at pages/index/index.vue:93")),e.newsList=[].concat((0,i.default)(e.newsList),(0,i.default)(n.data))}})}}};e.default=a}).call(this,n("0de9")["default"])},"8bbf":function(t,e){t.exports=Vue},"8e90":function(t,e,n){"use strict";n.r(e);var r=n("3210"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},9523:function(t,e,n){var r=n("a395");t.exports=function(t,e,n){return e=r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},"9adf":function(t,e,n){"use strict";n.r(e);var r=n("6ac1"),i=n("6c11");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"043fe417",null,!1,r["a"],void 0);e["default"]=o.exports},a395:function(t,e,n){var r=n("7037")["default"],i=n("e50d");t.exports=function(t){var e=i(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},a69c:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.parseTime=function(t,e){if(0===arguments.length||!t)return null;var n,r=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===(0,i.default)(t)?n=t:("string"===typeof t&&/^[0-9]+$/.test(t)?t=parseInt(t):"string"===typeof t&&(t=t.replace(new RegExp(/-/gm),"/").replace("T"," ").replace(new RegExp(/\.[\d]{3}/gm),"")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var a={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},s=r.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,e){var n=a[e];return"a"===e?["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"][n]:(t.length>0&&n<10&&(n="0"+n),n||0)}));return s},e.timeInterval=function(t){var e=t,n=new Date,r=Math.abs(n.getTime()-e),i=Math.floor(r/31536e6),a=Math.floor(r/864e5),s=r%864e5,o=Math.floor(s/36e5),u=s%36e5,c=Math.floor(u/6e4),l=u%6e4,f=Math.round(l/1e3),d="";0!=i?d=i+"\u5e74\u524d":0==i&&0!=a?d=a+"\u5929\u524d":0==a&&0!=o?d=o+"\u5c0f\u65f6\u524d":0==o&&0!=c?d=c+"\u5206\u949f\u524d":0==c&&f<60&&(d="\u521a\u521a");return d};var i=r(n("7037"))},b185:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={NewsBox:n("bf0d").default},i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:t._$s(0,"sc","user"),attrs:{_i:0}},[r("view",{staticClass:t._$s(1,"sc","top"),attrs:{_i:1}},[r("image",{attrs:{src:t._$s(2,"a-src",n("f8c9")),_i:2}}),r("view",{staticClass:t._$s(3,"sc","text"),attrs:{_i:3}})]),t._l(t._$s(4,"f",{forItems:t.listArr}),(function(e,n,i,a){return r("view",{key:t._$s(4,"f",{forIndex:i,key:e.id}),staticClass:t._$s("4-"+a,"sc","content"),attrs:{_i:"4-"+a}},[r("NewsBox",{attrs:{item:e,_i:"5-"+a},nativeOn:{click:function(n){return t.goDetail(e)}}})],1)})),t._$s(6,"i",!t.listArr.length)?r("view",{staticClass:t._$s(6,"sc","nohistory"),attrs:{_i:6}},[r("image",{attrs:{src:t._$s(7,"a-src",n("e074")),_i:7}}),r("view",{staticClass:t._$s(8,"sc","text"),attrs:{_i:8}})]):t._e()],2)},a=[]},b271:function(t,e,n){"use strict";n.r(e);var r=n("e058"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},bf0d:function(t,e,n){"use strict";n.r(e);var r=n("3c62"),i=n("3730");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var s=n("f0c5"),o=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=o.exports},c6f1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{listArr:[]}},onShow:function(){this.getHisData()},methods:{goDetail:function(e){uni.navigateTo({url:"/pages/detail/detail?cid=".concat(e.classid,"&id=").concat(e.id)}),t("log",e," at pages/user/user.vue:37")},getHisData:function(){var e=uni.getStorageSync("historyArr")||[];this.listArr=e,t("log",this.listArr," at pages/user/user.vue:42")}}};e.default=n}).call(this,n("0de9")["default"])},c9b3:function(t,e,n){"use strict";var r=n("4ea4"),i=r(n("9523")),a=r(n("7037"));n("e7ae");var s=r(n("de04")),o=r(n("8bbf"));function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}o.default.config.productionTip=!1,s.default.mpType="app";try{uni.addInterceptor({returnValue:function(t){return function(t){return!!t&&("object"===(0,a.default)(t)||"function"===typeof t)&&"function"===typeof t.then}(t)?new Promise((function(e,n){t.then((function(t){t[0]?n(t[0]):e(t[1])}))})):t}})}catch(l){}var c=new o.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},s.default));c.$mount()},cc7c:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"NewsBox",props:{item:{type:Object,default:function(){return{title:"\u7ec4\u4ef6\u5185\u9ed8\u8ba4\u7684\u6807\u9898",author:"\u5f20\u4e09",hits:668,picurl:"../../static/images/nopic.jpg",looktime:"2023-3-27 10:20:10"}}}},data:function(){return{}}};e.default=r},de04:function(t,e,n){"use strict";n.r(e);var r=n("8e90");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var a=n("f0c5"),s=Object(a["a"])(r["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=s.exports},e058:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("a69c"),i={data:function(){return{detail:null,detailData:{}}},onLoad:function(e){t("log",e," at pages/detail/detail.vue:36"),this.detail=e,this.getDetail()},methods:{getDetail:function(){var e=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/detail.php",data:this.detail,success:function(n){t("log",n," at pages/detail/detail.vue:46"),n.data.content=n.data.content.replace(/<img/gi,'<img style="max-width:100%"'),n.data.posttime=(0,r.parseTime)(n.data.posttime),e.detailData=n.data,e.getHistory(),t("log",e.detailData," at pages/detail/detail.vue:51"),uni.setNavigationBarTitle({title:e.detailData.title})}})},getHistory:function(){var e=this,n=uni.getStorageSync("historyArr")||[],i={id:this.detailData.id,classid:this.detailData.classid,picurl:this.detailData.picurl,looktime:(0,r.parseTime)(Date.now()),title:this.detailData.title},a=n.findIndex((function(t){return t.id==e.detailData.id}));a>=0&&n.splice(a,1),t("log",i," at pages/detail/detail.vue:74"),n.unshift(i),n=n.slice(0,10),uni.setStorageSync("historyArr",n)}}};e.default=i}).call(this,n("0de9")["default"])},e074:function(t,e){t.exports="/static/images/nohis.png"},e50d:function(t,e,n){var r=n("7037")["default"];t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},e7ae:function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("9adf").default)})),__definePage("pages/user/user",(function(){return Vue.extend(n("89cb").default)})),__definePage("pages/detail/detail",(function(){return Vue.extend(n("2ece").default)}))},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,a,s,o,u,c){var l,f="function"===typeof t?t.options:t;if(u){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(f.components,p)&&(f.components[p]=u[p])}if(c&&("function"===typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):i&&(l=o?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,e){return l.call(e),v(t,e)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},f8c9:function(t,e){t.exports="/static/images/history.png"}},[["c9b3","app-config"]]]);