(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(15),n(1)),i=n.n(l),s=n(6),u=n(4),m=n(2),d=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/".concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=n(9),f=function(e){var t=e.id,n=e.title,a=e.userName,c=e.completed;return r.a.createElement("li",{key:t},r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:c}),r.a.createElement("span",null,n),r.a.createElement("small",{className:"right"},a))},h=function(e){var t=e.name,n=e.position,a=e.isActive,c=e.handleChange;return r.a.createElement("div",{className:"col s4 ".concat(n,"-align")},r.a.createElement("label",{htmlFor:"sortBy".concat(t)},r.a.createElement("input",{type:"checkbox",id:"sortBy".concat(t),checked:a,onChange:function(){return c(t)}}),r.a.createElement("i",{className:"medium material-icons arrow ".concat(a&&"arrow--active")},"arrow_drop_down")))},b=function(e){var t=e.todos,n=Object(a.useState)("userName"),c=Object(m.a)(n,2),o=c[0],l=c[1],i=Object(p.a)(t).sort((function(e,t){return"completed"===o?Number(e.completed)-Number(t.completed):"title"===o?e.title.localeCompare(t.title):e.user.name.localeCompare(t.user.name)})),s=function(e){l(e)};return r.a.createElement("ul",null,r.a.createElement("li",{className:"row"},r.a.createElement(h,{name:"completed",position:"left",handleChange:s,isActive:"completed"===o}),r.a.createElement(h,{name:"title",position:"center",handleChange:s,isActive:"title"===o}),r.a.createElement(h,{name:"userName",position:"right",handleChange:s,isActive:"userName"===o})),i.map((function(e){return r.a.createElement(f,{id:e.id,key:e.id,completed:e.completed,userName:e.user.name,title:e.title})})))},E=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),l=Object(m.a)(o,2),p=l[0],f=l[1],h=Object(a.useState)(!1),E=Object(m.a)(h,2),v=E[0],O=E[1],j=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,d("users");case 3:return t=e.sent,e.next=6,d("todos");case 6:n=e.sent,c(n.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:t.find((function(t){return t.id===e.userId}))})}))),f(!1),O(!0);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return v?r.a.createElement(b,{todos:n}):r.a.createElement("div",{className:"center-align"},p?r.a.createElement("h5",null,"Loading..."):r.a.createElement("button",{type:"button",className:"btn btn-large",onClick:j},"Load"))},v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Dynamic list of TODOs"),r.a.createElement(E,null))};o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cca284a0.chunk.js.map