"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134,525,146],{197:function(n,e,t){t.d(e,{LI:function(){return s},Mc:function(){return f},r7:function(){return p},uV:function(){return l},vw:function(){return i}});var r=t(165),a=t(861),u=t(243),c="https://api.themoviedb.org/3/",o={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDI5ZGVlOTNiZTJjYThhZDQ2YmYyMWRlMTQ5ZWU1MiIsInN1YiI6IjY0ZGI0NGQ1ZjQ5NWVlMDI5MzU2OTE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X9DeGRwHeq0vI0Xl8w9Nwm04Y3Uo2f5aEe62rr6KFDE"}},i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"trending/movie/day?language=en-US"),o);case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,u.Z.get("".concat(c,"search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1"),o);case 3:return a=n.sent,i=a.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"?language=en-US"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"/credits?language=en-US"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(c,"movie/").concat(e,"/reviews?language=en-US&page=1"),o);case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},525:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,a,u,c=t(689),o=t(168),i=t(547),s=t(87),f=i.ZP.ul(r||(r=(0,o.Z)(["\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),l=i.ZP.li(a||(a=(0,o.Z)(["\n  margin-bottom: 12px;\n"]))),p=(0,i.ZP)(s.rU)(u||(u=(0,o.Z)(["\n  text-decoration: none;\n  color: #333;\n  font-weight: bold;\n  transition: color 0.3s ease;\n\n  &:hover {\n    color: #ff5722;\n  }\n"]))),d=t(184),h=function(n){var e=n.movies,t=(0,c.TH)();return(0,d.jsx)(f,{children:e.map((function(n){return(0,d.jsx)(l,{children:(0,d.jsx)(p,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},146:function(n,e,t){t.r(e);var r=t(184);e.default=function(n){var e=n.onSearchSubmit,t=n.selectedMovies,a=n.onQueryChange;return(0,r.jsx)("div",{style:{margin:"20px 0"},children:(0,r.jsxs)("form",{onSubmit:e,children:[(0,r.jsx)("input",{type:"text",value:t,onChange:a}),(0,r.jsx)("button",{type:"submit",children:"Search"})]})})}},134:function(n,e,t){t.r(e);var r=t(439),a=t(87),u=t(791),c=t(197),o=t(525),i=t(146),s=t(691),f=t(184);e.default=function(){var n,e=(0,u.useState)(""),t=(0,r.Z)(e,2),l=t[0],p=t[1],d=(0,u.useState)([]),h=(0,r.Z)(d,2),v=h[0],Z=h[1],g=(0,u.useState)(!1),m=(0,r.Z)(g,2),x=m[0],y=m[1],w=(0,u.useState)(null),S=(0,r.Z)(w,2),j=S[0],I=S[1],b=(0,u.useState)(!1),k=(0,r.Z)(b,2),U=k[0],J=k[1],M=(0,a.lr)(),N=(0,r.Z)(M,2),Q=N[0],C=N[1],W=null!==(n=Q.get("query"))&&void 0!==n?n:"";(0,u.useEffect)((function(){W&&(J(!0),(0,c.LI)({query:W}).then((function(n){var e=n.results;if(0===e.length)return y(!0),void Z([]);Z(e)})).catch((function(n){I(n.message)})).finally(J(!1)))}),[W]);var q=function(n){C({query:n})};return(0,f.jsxs)("div",{children:[U&&(0,f.jsx)(s.Z,{}),(0,f.jsx)(i.default,{onSearchSubmit:function(n){n.preventDefault(),l?(q(l),p("")):alert("Insert serch word")},selectedMovies:l,onQueryChange:function(n){p(n.target.value),y(!1)}}),j&&(0,f.jsxs)("p",{style:{fontSize:"large"},children:["Sorry. ",j," \ud83d\ude2d"]}),x&&(0,f.jsx)("p",{style:{fontSize:"large"},children:"Sorry. We found no movies, try again."}),(0,f.jsx)(o.default,{movies:v})]})}}}]);
//# sourceMappingURL=134.b5a4968d.chunk.js.map