(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{58:function(t,n,e){},64:function(t,n,e){"use strict";e.r(n);var o=e(41),a=e.n(o),c=e(42),r=e(14),i=e(39),s=e.n(i),u=e(0),d=e.n(u),l=(e(58),e(94)),j=e(93),f=e(90),b=e(91),m=e(88),h=e(92),g=e(3),p=d.a.memo((function(t){var n=t.goods;return Object(g.jsx)(b.a,{children:n.map((function(t){return Object(g.jsx)(m.a,{disablePadding:!0,alignItems:"center","data-cy":"good",style:{color:t.color},children:Object(g.jsx)(h.a,{primary:t.name})},t.id)}))})}));function y(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var O=function(){return y().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}))},x=function(){return y().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},v=function(){var t=Object(u.useState)([]),n=Object(r.a)(t,2),e=n[0],o=n[1],a=Object(u.useState)(""),i=Object(r.a)(a,2),d=i[0],b=i[1],m=Object(u.useCallback)(function(){var t=Object(c.a)(s.a.mark((function t(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n(),t.t0=o,t.next=4,e;case 4:t.t1=t.sent,(0,t.t0)(t.t1),b("".concat(n.name));case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[]);return Object(g.jsx)(l.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",margin:"0, auto"},children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(j.a,{variant:"h3",gutterBottom:!0,children:"Dynamic list of Goods"}),Object(g.jsxs)("div",{className:"Buttons",children:[Object(g.jsx)(f.a,{variant:"getAll"===d?"contained":"outlined",type:"button",size:"small","data-cy":"all-button",onClick:function(){return m(y)},children:"Load all goods"}),Object(g.jsx)(f.a,{variant:"get5First"===d?"contained":"outlined",type:"button",size:"small","data-cy":"first-five-button",onClick:function(){return m(O)},children:"Load 5 first goods"}),Object(g.jsx)(f.a,{variant:"getRedGoods"===d?"contained":"outlined",type:"button",size:"small","data-cy":"red-button",onClick:function(){return m(x)},children:"Load red goods"})]}),Object(g.jsx)(p,{goods:e})]})})};a.a.render(Object(g.jsx)(v,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.58f67cb7.chunk.js.map