(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{30:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var a=c(23),s=c.n(a),n=c(9),i=(c(28),c(29),c(30),c(2)),b=c(13),j=c.n(b),r=(c(0),c(3)),l=function(e){var t=e.tabs,c=Object(i.q)().tabId,a=t.find((function(e){return e.id===c}))||null;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":e.id===c}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(e.id),children:e.title})},e.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a?a.content:"Please select a tab"})]})};var d=function(){return Object(r.jsx)("h1",{children:"Page Not Found 404"})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(r.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)("h1",{className:"title",children:"Home page"})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(l,{tabs:o})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(l,{tabs:o})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(d,{})})]})})})]})};s.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5929d2ca.chunk.js.map