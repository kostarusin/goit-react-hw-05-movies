"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{197:function(n,e,t){t.d(e,{LI:function(){return s},Mc:function(){return f},r7:function(){return l},uV:function(){return p},vw:function(){return i}});var r=t(165),a=t(861),u=t(243),c="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDI5ZGVlOTNiZTJjYThhZDQ2YmYyMWRlMTQ5ZWU1MiIsInN1YiI6IjY0ZGI0NGQ1ZjQ5NWVlMDI5MzU2OTE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9DeGRwHeq0vI0Xl8w9Nwm04Y3Uo2f5aEe62rr6KFDE"}},i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"trending/movie/day?language=en-US"),o);case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,u.Z.get("".concat(c,"search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1"),o);case 3:return a=n.sent,i=a.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"?language=en-US"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"/credits?language=en-US"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"/reviews?language=en-US&page=1"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},760:function(n,e,t){var r=t(184);e.Z=function(n){var e=n.error;return(0,r.jsxs)("p",{style:{fontSize:"large"},children:["Sorry. ",e," \ud83d\ude2d"]})}},174:function(n,e,t){t.d(e,{Z:function(){return h}});var r,a,u,c=t(689),o=t(168),i=t(547),s=t(87),f=i.ZP.ul(r||(r=(0,o.Z)(["\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),p=i.ZP.li(a||(a=(0,o.Z)(["\n  margin-bottom: 12px;\n"]))),l=(0,i.ZP)(s.rU)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  color: #333;\n  font-weight: bold;\n\n  &:hover {\n    color: #ff5722;\n  }\n"]))),Z=t(184),h=function(n){var e=n.movies,t=(0,c.TH)();return(0,Z.jsx)(f,{children:e.map((function(n){return(0,Z.jsx)(p,{children:(0,Z.jsx)(l,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},415:function(n,e,t){t.r(e);var r=t(439),a=t(791),u=t(197),c=t(174),o=t(227),i=t(760),s=t(184);e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],f=e[1],p=(0,a.useState)(!1),l=(0,r.Z)(p,2),Z=l[0],h=l[1],d=(0,a.useState)(null),v=(0,r.Z)(d,2),m=v[0],g=v[1];return(0,a.useEffect)((function(){h(!0),(0,u.vw)().then((function(n){f(n.results)})).catch((function(n){g(n.message)})).finally(h(!1))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Trending Today"}),Z&&(0,s.jsx)(o.Z,{}),m&&(0,s.jsx)(i.Z,{error:m}),(0,s.jsx)(c.Z,{movies:t})]})}}}]);
//# sourceMappingURL=415.70421531.chunk.js.map