(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(19)},,,,,function(e,n,t){},function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(3),c=t.n(r),s=(t(13),t(4)),l=t(5),i=t(1),h=t(7),u=t(6),m=(t(14),t(15),t(16),t(17),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"/?set=set3")}),o.a.createElement("h2",null," ",e.monster.name," "),o.a.createElement("p",null," ",e.monster.email," "))}),d=function(e){return o.a.createElement("div",{className:"cardlist"},e.monsters.map((function(e){return o.a.createElement(m,{key:"".concat(e.id),monster:e}," ")})))},f=(t(18),function(e){var n=e.placeholder,t=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),p=function(e){Object(h.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(i.a)(e)),e}return Object(l.a)(t,[{key:"handleChange",value:function(e){return this.setState({searchField:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){console.log(n),e.setState({monsters:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," Let's find Monsters "),o.a.createElement(f,{placeholder:"search monster",handleChange:this.handleChange}),o.a.createElement(d,{monsters:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.02ff5b12.chunk.js.map